import { model, models, Schema } from "mongoose";

const TrainingSchema = new Schema<TrainingI>({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    orderNo: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})

export interface TrainingI {
    _id?: string,
    name: string,
    description: string,
    orderNo: number,
    createdAt?: Date,
    updatedAt?: Date,
}

export const Training = models.Training || model("Training", TrainingSchema)