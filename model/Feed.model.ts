import { model, models, Schema } from "mongoose";

const FeedSchema = new Schema<FeedI>({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "completed"],
        default: "pending",
    },
}, { timestamps: true })

export interface FeedI {
    _id?: Schema.Types.ObjectId
    title: string;
    description: string;
    status?: string;
    createdAt: Date;
}

export const Feed = models.Feed || model('Feed', FeedSchema);
