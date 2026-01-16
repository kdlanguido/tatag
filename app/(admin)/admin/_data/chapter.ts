"use server"

import { User } from "@/model/User.model";
import { Types } from "mongoose";


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


export { fetchChapterApplicants };