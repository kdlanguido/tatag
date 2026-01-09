'use server'

import { auth } from "@/lib/auth";
import { connectToMongoDB } from "@/lib/mongoose";
import { Chapter, ChapterI } from "@/model/Chapter.model";
import { User } from "@/model/User.model";
import { Types } from "mongoose";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { UTApi } from "uploadthing/server";

const fetchChapters = async (): Promise<ChapterICustom[]> => {
    await connectToMongoDB();

    const chapters = await Chapter.find({})
        .populate({
            path: "founder",
            select: "nickname"
        })
        .lean();

    return JSON.parse(
        JSON.stringify(chapters)
    );
}

const fetchChapterById = async (id: string): Promise<ChapterI> => {
    await connectToMongoDB();

    const chapters = await Chapter.findOne({ _id: id })
        .populate({
            path: "founder",
            select: "nickname"
        })
        .lean();

    return JSON.parse(
        JSON.stringify(chapters)
    );
}

const createChapter = async (prevState: GenericInitState, formData: FormData): Promise<GenericInitState> => {

    try {
        await connectToMongoDB();

        const region = formData.get('region')
        const name = formData.get('name')
        const slogan = formData.get('slogan')
        const files = formData.get("logo") as File;
        const hqAddress = formData.get("hqAddress")
        const establishedYear = formData.get("establishedYear")
        const founder = formData.get("founder")
        const utapi = new UTApi();
        const [{ data: responseData }] = await utapi.uploadFiles([files]);
        const logo = responseData?.ufsUrl as String
        const logoFileKey = responseData?.key

        const res = await Chapter.create({
            region,
            name,
            slogan,
            logo,
            logoFileKey,
            hqAddress,
            establishedYear,
            founder
        })

        if (!res) {
            return {
                success: false
            }
        }

        return {
            success: true
        }
    } catch (error) {
        return {
            success: false,
        }
    }
}

const checkIfChapterNameExists = async (name: string): Promise<boolean> => {
    await connectToMongoDB();

    const isExisting = await Chapter.findOne({ name });

    if (!isExisting) {
        return false
    }

    return true
}

const checkIfUserIsChapterAdmin = async (chapterId: string): Promise<boolean> => {
    await connectToMongoDB()
    const session = await auth.api.getSession({ headers: await headers() })

    if (!session) {
        redirect("/login")
    }

    const user = await User.findOne({ email: session.user.email });

    if (!user) {
        return false
    }

    const userChapterId = user.membership.chapterId.toString()

    console.log(userChapterId)

    if (userChapterId === chapterId && user.membership.memberLevel === 'admin') {
        return true
    }

    return false

}

const updateChapter = async (prevState: UpdateChapterState, formData: FormData): Promise<UpdateChapterState> => {
    try {
        const name = formData.get("name")
        const region = formData.get("region")
        const slogan = formData.get("slogan")
        const hqAddress = formData.get("hqAddress")
        const establishedYear = formData.get("establishedYear")
        const _id = formData.get("chapterId")

        const res = await Chapter.findByIdAndUpdate(_id, {
            $set: {
                name,
                region,
                slogan,
                hqAddress,
                establishedYear
            }
        })

        if (!res) {
            return {
                success: false
            }
        }

        return {
            success: true
        }

    } catch (e) {
        return {
            success: false,
        }
    }
}

const updateChapterLogo = async (prevState: UpdateChapterState, formData: FormData): Promise<UpdateChapterState> => {
    try {
        const inputLogo = formData.get("logo") as File
        const currentLogoFileKey = formData.get("logoFileKey") as string
        const _id = formData.get("_id")

        const utapi = new UTApi();
        const { success } = await utapi.deleteFiles(currentLogoFileKey);

        if (success) {
            const [{ data: responseData }] = await utapi.uploadFiles([inputLogo]);
            const logo = responseData?.ufsUrl as String
            const logoFileKey = responseData?.key as String

            console.log("logo: " + logoFileKey)


            const res = await Chapter.findByIdAndUpdate(_id, {
                $set: {
                    logo,
                    logoFileKey
                }
            })

            if (!res) {
                return {
                    success: false
                }
            }

            return {
                success: true
            }

        } else {
            return {
                success: false
            }
        }

    } catch (e) {
        return {
            success: false,
        }
    }
}

const fetchChapterMembers = async (chapterId: string): Promise<UserIUI[]> => {
    const res = await User.aggregate([
        {
            $match: {
                "membership.chapterId": new Types.ObjectId(chapterId),
                "membership.memberStatus": "active",
                "membership.memberLevel": { $in: ["member", "admin"] }
            },
        },
        {
            $lookup: {
                from: "batches",
                localField: "membership.batchId",
                foreignField: "_id",
                as: "batch",
            },
        },
        {
            $unwind: {
                path: "$batch",
                preserveNullAndEmptyArrays: true,
            },
        },
        {
            $addFields: {
                "membership.batchName": "$batch.name",
            },
        },
        {
            $project: {
                batch: 0,
            },
        },
    ]);

    return JSON.parse(
        JSON.stringify(res)
    );
}

const fetchChapterApplicants = async (chapterId: string): Promise<UserIUI[]> => {
    const res = await User.aggregate([
        {
            $match: {
                "membership.chapterId": new Types.ObjectId(chapterId),
                "membership.memberLevel": "applicant"
            },
        },
        {
            $lookup: {
                from: "batches",
                localField: "membership.batchId",
                foreignField: "_id",
                as: "batch",
            },
        },
        {
            $unwind: {
                path: "$batch",
                preserveNullAndEmptyArrays: true,
            },
        },
        {
            $addFields: {
                "membership.batchName": "$batch.name",
            },
        },
        {
            $project: {
                batch: 0,
            },
        },
    ]);

    return JSON.parse(
        JSON.stringify(res)
    );
}

const fetchApplicantsByType = async (chapterId: string, type: string): Promise<UserIUI[]> => {
    const res = await User.aggregate([
        {
            $match: {
                "membership.chapterId": new Types.ObjectId(chapterId),
                "membership.memberLevel": "applicant",
                "membership.memberStatus": type
            },
        },
        {
            $lookup: {
                from: "batches",
                localField: "membership.batchId",
                foreignField: "_id",
                as: "batch",
            },
        },
        {
            $unwind: {
                path: "$batch",
                preserveNullAndEmptyArrays: true,
            },
        },
        {
            $addFields: {
                "membership.batchName": "$batch.name",
            },
        },
        {
            $project: {
                batch: 0,
            },
        },
    ]);

    return JSON.parse(
        JSON.stringify(res)
    );
}

export {
    fetchChapters,
    fetchChapterById,
    createChapter,
    checkIfChapterNameExists,
    checkIfUserIsChapterAdmin,
    updateChapter,
    updateChapterLogo,
    fetchChapterMembers,
    fetchChapterApplicants,
    fetchApplicantsByType
}