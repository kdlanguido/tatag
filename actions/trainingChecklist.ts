import { connectToMongoDB } from "@/lib/mongoose";
import { TrainingChecklist } from "@/model/TrainingChecklist.model";

const createChecklist = async (userId:string) => {

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

        trainingNames.forEach(async (trainingName,index) => {
            await TrainingChecklist.create({
                userId,
                trainingName: trainingName,
                status: "pending",
                orderNo : index+1
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

export { createChecklist };