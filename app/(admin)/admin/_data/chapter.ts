"use server"

import { TrainingChecklist } from "@/model/TrainingChecklist.model";
import { User } from "@/model/User.model";
import { Types } from "mongoose";

const fetchChapterApplicants = async (chapterId: string): Promise<UserIUI[]> => {
    const res = await User.aggregate([
        {
            $match: {
                "membership.chapterId": new Types.ObjectId(chapterId),
                "membership.memberLevel": "applicant",
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
            $lookup: {
                from: "trainingChecklist",
                let: { userId: "$_id" },
                pipeline: [
                    {
                        $match: {
                            $expr: { $eq: ["$userId", "$$userId"] },
                        },
                    },
                    {
                        $group: {
                            _id: null,
                            total: { $sum: 1 },
                            completed: {
                                $sum: {
                                    $cond: [
                                        { $eq: ["$status", "completed"] },
                                        1,
                                        0,
                                    ],
                                },
                            },
                        },
                    },
                ],
                as: "trainingStats",
            },
        },
        {
            $addFields: {
                totalTrainings: {
                    $ifNull: [{ $arrayElemAt: ["$trainingStats.total", 0] }, 0],
                },
                completedTrainings: {
                    $ifNull: [{ $arrayElemAt: ["$trainingStats.completed", 0] }, 0],
                },
            },
        },
        {
            $addFields: {
                Progress: {
                    $concat: [
                        { $toString: "$completedTrainings" },
                        "/",
                        { $toString: "$totalTrainings" },
                    ],
                },
            },
        },
        {
            $project: {
                batch: 0,
                trainingStats: 0,
                totalTrainings: 0,
                completedTrainings: 0,
            },
        },
    ]);

    return JSON.parse(JSON.stringify(res));
};

const checkIfApplicantHasPendingTrainings = async (applicantId: string): Promise<boolean> => {
    const res = await TrainingChecklist.aggregate([
        {
            $match: {
                userId: applicantId,
                status: "pending"
            },
        },
    ]);

    if (!res || res.length === 0) {
        return false;
    }

    return true
}

export { fetchChapterApplicants, checkIfApplicantHasPendingTrainings };