"use server"

import { connectToMongoDB } from "@/lib/mongoose"
import { MembershipUpdateLog } from "@/model/MembershipUpdateLog"
import { User } from "@/model/User.model"

const fetchMembershipUpdateRequests = async (): Promise<MemberShipUpdateLogCustomType[]> => {
    await connectToMongoDB()

    const res = await MembershipUpdateLog.find({ status: "pending" })
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

const approveMembershipRequest = async (prevState: GenericInitState, formData: FormData): Promise<GenericInitState> => {
    await connectToMongoDB()

    const reqId = formData.get('reqId')
    const approvedBy = formData.get('approvedBy')
    const req = await MembershipUpdateLog.findById({ _id: reqId })

    if (!req) return {
        success: false
    }

    await User.findOneAndUpdate(
        { _id: req.userId },
        {
            $set: {
                "membership.chapterId": req.chapterId,
                "membership.batchId": req.batchId,
                "membership.memberStatus": "active",
                "membership.memberSince": new Date(),
                "membership.memberLevel": {
                    $ifNull: ["$membership.memberLevel", "member"]
                }
            }
        },
        { new: true }
    );

    await MembershipUpdateLog.findOneAndUpdate({ _id: reqId },
        {
            status: "approved",
            approvedBy
        }
    );

    return {
        success: true
    }
}

export {
    fetchMembershipUpdateRequests,
    approveMembershipRequest
}