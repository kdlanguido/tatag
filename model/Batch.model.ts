import { model, models, Schema } from "mongoose";

const BatchSchema = new Schema<BatchI>({
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "completed"],
        default: "pending",
        required: false
    },
    pruebaDate: {
        type: Date,
        required: true
    },
    chapterId: {
        type: Schema.Types.ObjectId,
        required: true
    }
})

export interface BatchI {
    _id?: Schema.Types.ObjectId
    name: string;
    status?: string;
    pruebaDate: Date;
    chapterId: Schema.Types.ObjectId;
}

export const Batch = models.Batch || model('Batch', BatchSchema);
