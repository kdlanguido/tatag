"use server"

import { connectToMongoDB } from "@/lib/mongoose";
import { TrainingChecklist } from "@/model/TrainingChecklist.model";

const fetchTrainingChecklist = async (userId: string) => {
    await connectToMongoDB();
    const res = await TrainingChecklist.find({ userId }).sort({orderNo: 1}).lean();
    return JSON.parse(JSON.stringify(res));
}






export { fetchTrainingChecklist };
