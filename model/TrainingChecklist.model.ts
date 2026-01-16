import { model, models, Schema } from "mongoose";

interface TrainingChecklistI {
    userId: string,
    trainingName: string,
    approvedBy?: Schema.Types.ObjectId,
    dateApproved?: Date,
    status:string,
    orderNo?: number
}

const schema = new Schema<TrainingChecklistI>({
    userId: {
        type: String,
    },
    trainingName: {
        type: String,
    },
    approvedBy: {
        type: Schema.Types.ObjectId,
        required:false
    },
    dateApproved: {
        type: Date,
        required:false
    },
    status: {
        type: String,
        default: "pending",
        enum: ["pending", "completed"]
    },
    orderNo: {
        type: Number,
        required: false
    }   
})

export const TrainingChecklist = models.TrainingChecklist || model("TrainingChecklist", schema);