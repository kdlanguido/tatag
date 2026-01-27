'use server'

import { auth } from "@/lib/auth";
import { connectToMongoDB } from "@/lib/mongoose"
import { MembershipUpdateLog } from "@/model/MembershipUpdateLog";
import { User, UserI } from "@/model/User.model"
import { Types } from "mongoose";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { createChecklist } from "./trainingChecklist";
import { revalidatePath } from "next/cache";
import { TrainingChecklist } from "@/model/TrainingChecklist.model";

const registerUser = async (prevState: RegisterUserState, formData: FormData) => {
    await connectToMongoDB()

    const email = formData.get('email') as string
    const nickname = formData.get('nickname') as string

    const normalizedEmail = email.toLowerCase()
    const normalizedNickname = nickname.toLowerCase()

    const emailIsTaken = await User.findOne({ email: normalizedEmail })
    const nicknameIsTaken = await User.findOne({ nickname: normalizedNickname })

    console.log("Email is taken" + emailIsTaken)
    console.log("nickname is taken" + nicknameIsTaken)

    if (emailIsTaken) {
        return {
            emailErrorMsg: "Email is already taken",
            nicknameErrorMsg: "",
            success: false,
        }
    }

    if (nicknameIsTaken) {
        return {
            emailErrorMsg: "",
            nicknameErrorMsg: "Nickname is already taken",
            success: false,
        }
    }

    await User.create({ email, nickname })

    return {
        emailErrorMsg: "",
        nicknameErrorMsg: "",
        success: true,
    }
}

const updateUserProfile = async (prevState: ProfileUpdateInitState, formData: FormData) => {
    await connectToMongoDB()

    const email = formData.get('email') as string
    const nickname = formData.get('nickname') as string
    const weight = formData.get('weight') as string

    const hasChanged =
        weight !== prevState.weight ||
        nickname !== prevState.nickname

    if (!hasChanged) {
        return {
            weight,
            nickname,
            success: false
        }
    }

    await User.updateOne({ email }, { $set: { nickname: nickname.toLowerCase(), weight } })

    return {
        weight,
        nickname,
        success: true
    }
}

const updateUserAcceptApplication = async (prevState: GenericInitState, formData: FormData): Promise<GenericInitState> => {
    await connectToMongoDB()

    const id = formData.get("id") as string
    const batchId = formData.get("batchId") as string
    const adminId = formData.get("adminId") as string

    const res = await User.findByIdAndUpdate(
        id,
        {
            $set: {
                "membership.memberStatus": "active",
                "membership.batchId": batchId,
                "membership.acceptedBy": adminId
            },
        },
        { new: true }
    )

    if (!res) {
        return { success: false }
    }

    const createRes = await createChecklist(id)

    if ((!createRes.success)) {
        return { success: false }
    }

    return { success: true }
}

const updateApplicationPromoteTomember = async (formData: FormData) => {
    await connectToMongoDB()

    const id = formData.get("id") as string

    const res = await User.findByIdAndUpdate(
        id,
        { $set: { "membership.memberLevel": "member" } },
        { new: true }
    )

    if (!res) {
        console.log("Encountered error during ACTION:updateApplicationPromoteTomember")
        return
    }

    const deleteRes = await TrainingChecklist.deleteMany({ userId: id })

    if (!deleteRes) {
        console.log("Encountered error during ACTION:updateApplicationPromoteTomember.delete")
    }

    revalidatePath('/admin/applicants')
}

const createMembershipUpdateRequest = async (prevState: CreateMembershipUpdateInitState, formData: FormData) => {
    await connectToMongoDB()

    const batchId = formData.get('batchId') as string
    const userId = formData.get('userId') as string
    const chapterId = formData.get('chapterId') as string

    const requestExists = await MembershipUpdateLog.findOne({}).where({
        userId,
        status: "pending"
    })

    // if (prevState.previousBatchId == batchId && prevState.previousChapterId == chapterId) {
    //     return {
    //         success: false,
    //         status: 402,
    //         previousBatchId: batchId,
    //         previousChapterId: chapterId,
    //     }
    // }

    if (requestExists) {
        return {
            success: false,
            status: 400,
            previousBatchId: batchId,
            previousChapterId: chapterId,
        }
    }

    await MembershipUpdateLog.create({
        batchId,
        chapterId,
        userId
    })

    return {
        success: true,
        status: 201,
        previousBatchId: batchId,
        previousChapterId: chapterId,
    }
}

const applyMembership = async (prevState: GenericInitState, formData: FormData): Promise<GenericInitState> => {
    await connectToMongoDB()

    const userId = formData.get('userId') as string
    const chapterId = formData.get('chapterId') as string

    const res = await User.findByIdAndUpdate(userId, {
        membership: {
            chapterId,
            memberLevel: "applicant"
        }
    })

    if (!res) {
        return {
            success: false
        }
    }

    return {
        success: true,
    }
}

const cancelMembershipUpdateRequest = async (prevState: GenericInitState, formData: FormData) => {

    await connectToMongoDB()

    const reqId = formData.get("reqId")
    const cancelReason = formData.get("cancelReason")

    await MembershipUpdateLog.updateOne({
        _id: reqId,
    }, {
        $set: {
            status: 'cancelled',
            cancelReason
        }
    })

    return {
        success: true
    }
}

const fetchMembershipUpdateRequests = async (): Promise<MemberShipUpdateLogCustomType[]> => {
    await connectToMongoDB()

    const session = await auth.api.getSession({ headers: await headers() })

    if (!session) {
        redirect("/login")
    }

    const user = await User.findOne({ email: session.user.email })

    if (!user) return []

    const userId = user._id.toString()

    const res = await MembershipUpdateLog.find({ userId })
        .populate({
            path: "chapterId",
            select: "name"
        })
        .populate({
            path: "batchId",
            select: "name"
        })
        .populate({
            path: "userId",
            select: "email nickname"
        })
        .sort({ '_id': -1 })
        .lean()

    return JSON.parse(JSON.stringify(res))
}

const fetchActiveMembers = async (): Promise<UserI[]> => {
    await connectToMongoDB()

    const activeMembers = await User.aggregate([
        { $match: { "membership.memberStatus": "active" } },
        {
            $lookup: {
                from: "batches",
                localField: "membership.batchId",
                foreignField: "_id",
                as: "batch"
            }
        },
        { $unwind: "$batch" },
        {
            $addFields: {
                sortOrder: {
                    $cond: [
                        { $eq: ["$batch.name", "Pioneer Batch"] },
                        0,
                        1
                    ]
                }
            }
        },
        { $sort: { sortOrder: 1, "batch.name": 1 } },
        {
            $project: {
                _id: 1,
                membership: 1,
                batch: 1,
                email: 1,
                nickname: 1,

            }
        }
    ]);

    return JSON.parse(
        JSON.stringify(activeMembers)
    );
}

const fetchAllMembers = async (): Promise<UserI[]> => {
    const res = await User.find({})
    return JSON.parse(
        JSON.stringify(res)
    );
}

const fetchProfile = async (id?: string): Promise<UserI> => {
    await connectToMongoDB()

    const session = await auth.api.getSession({ headers: await headers() })

    if (!session) {
        redirect("/login")
    }

    if (!id) {
        const profile = await User.findOne({ email: session.user.email }).lean();
        return JSON.parse(JSON.stringify(profile));
    } else {
        const profile = await User.findById({ _id: id }).lean();
        return JSON.parse(JSON.stringify(profile));
    }

}

const fetchApplicationInformation = async (_id: string): Promise<ApplicantInformationI> => {
    await connectToMongoDB()

    const [applicantInformation] = await User.aggregate([
        {
            $match: {
                _id: new Types.ObjectId(_id)
            }
        },

        {
            $lookup: {
                from: "chapters",
                localField: "membership.chapterId",
                foreignField: "_id",
                as: "chapter"
            }
        },

        {
            $unwind: "$chapter"
        },

        {
            $project: {
                _id: 1,
                membership: 1,
                email: 1,
                nickname: 1,
                chapter: 1
            }
        }
    ]);

    return JSON.parse(
        JSON.stringify(applicantInformation)
    );
}

const checkIfUserHasClub = async (): Promise<boolean> => {
    await connectToMongoDB()

    const session = await auth.api.getSession({ headers: await headers() })

    if (!session) {
        redirect("/login")
    }

    const user = await User.findOne(
        { email: session.user.email },
        { membership: 1, _id: 0 }
    )

    if (!user || !user?.membership) {
        return false
    }

    return true
}

const checkIfUserExists = async (): Promise<boolean> => {
    await connectToMongoDB();

    const session = await auth.api.getSession({ headers: await headers() })

    const userExists = await User.findOne({ email: session?.user.email })

    if (!userExists) {
        return false
    }

    return true
}

const checkIfUserIsAdmin = async (): Promise<boolean> => {
    await connectToMongoDB();

    const session = await auth.api.getSession({ headers: await headers() })

    const user = await User.findOne({ email: session?.user.email })

    if (!user) {
        return false
    }

    if (user.membership.memberLevel !== 'admin') {
        return false
    }

    return true
}

export {
    registerUser,
    updateUserProfile,
    updateUserAcceptApplication,
    applyMembership,
    createMembershipUpdateRequest,
    cancelMembershipUpdateRequest,
    checkIfUserHasClub,
    checkIfUserExists,
    checkIfUserIsAdmin,
    fetchProfile,
    fetchMembershipUpdateRequests,
    // fetchActiveMembers,
    // fetchAllMembers,
    fetchApplicationInformation,
    updateApplicationPromoteTomember
}