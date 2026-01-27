"use server"

import { connectToMongoDB } from "@/lib/mongoose";
import { TrainingChecklist } from "@/model/TrainingChecklist.model";
import { TrainingChecklistICustom } from "@/types/trainingChecklist";

const fetchTrainingChecklist = async (userId: string): Promise<TrainingChecklistICustom[]> => {
    await connectToMongoDB();
    const res = await TrainingChecklist.find({ userId }).populate("approvedBy", "nickname").sort({ orderNo: 1 }).lean();
    return JSON.parse(JSON.stringify(res));
}

const fetchTrainingPercentageCompleted = async (userId: string): Promise<number> => {

    await connectToMongoDB();
    
    const totalTrainings = await TrainingChecklist.countDocuments({ userId });
    const completedTrainings = await TrainingChecklist.countDocuments({ userId, status: "completed" });

    if (totalTrainings === 0) {
        return 0;
    }

    const percentageCompleted = Math.round((completedTrainings / totalTrainings) * 100)
    
    return percentageCompleted;
}

export {
    fetchTrainingChecklist,
    fetchTrainingPercentageCompleted
};
