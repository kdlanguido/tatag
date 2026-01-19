"use server"
import { connectToMongoDB } from "@/lib/mongoose";
import { TrainingChecklist } from "@/model/TrainingChecklist.model";
import { revalidatePath } from "next/cache";

const createChecklist = async (userId: string) => {

    try {
        await connectToMongoDB();

        const trainingNames = [
            "Orientation",
            "Hook Training",
            "Toproll Training",
            "Slip Training",
            "Referee's Grip",
            "Foul and Penalties",
            "Prueba De Fuerza",
        ]

        trainingNames.forEach(async (trainingName, index) => {
            await TrainingChecklist.create({
                userId,
                trainingName: trainingName,
                status: "pending",
                orderNo: index + 1
            })
        });

        return {
            success: true
        }
    } catch (error) {
        return {
            success: false
        }
    }
}

const markAsCompleted = async (formData: FormData) => {
    try {
        await connectToMongoDB();
        const checklistId = formData.get("checklistId") as string;
        const approvedBy = formData.get("approvedBy") as string;
        const applicantId = formData.get("applicantId") as string;
        await TrainingChecklist.findByIdAndUpdate(checklistId, {
            status: "completed",
            approvedBy,
            dateApproved: new Date()
        });
        revalidatePath('/training-checklist/' + applicantId);
    } catch (error) {
       console.log(error);
    }
}

export { createChecklist, markAsCompleted };