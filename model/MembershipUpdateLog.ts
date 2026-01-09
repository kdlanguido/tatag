import { model, models, Schema } from "mongoose";

import "@/model/Batch.model";
import "@/model/Chapter.model"
import "@/model/User.model";

export interface MembershipUpdateLogI {
    _id?: string;
    batchId: Schema.Types.ObjectId;
    userId: Schema.Types.ObjectId;
    chapterId: Schema.Types.ObjectId;
    status: string;
    createdAt?: Date;
    updatedAt?: Date;
    cancelReason?: string;
    approvedBy?: Schema.Types.ObjectId;
}

const MembershipUpdateLogSchema = new Schema(
    {
        batchId: {
            type: Schema.Types.ObjectId,
            ref: 'Batch',
            required: true
        },
        chapterId: {
            type: Schema.Types.ObjectId,
            ref: 'Chapter',
            required: true
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        status: {
            type: String,
            enum: ["pending", "approved", "declined", "cancelled"],
            default: "pending",
            required: true
        },
        cancelReason: {
            type: String,
            required: false
        },
        approvedBy: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: false
        },
    },
    {
        timestamps: true
    }
)

export const MembershipUpdateLog = models.MembershipUpdateLog || model<MembershipUpdateLogI>('MembershipUpdateLog', MembershipUpdateLogSchema)
