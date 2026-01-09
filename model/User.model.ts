import { model, models, Schema } from "mongoose";

import "@/model/Chapter.model"
import "@/model/Batch.model";

const membershipSchema = new Schema<MembershipI>({
    chapterId: {
        type: Schema.Types.ObjectId,
        ref: "Chapter",
        required: false
    },
    batchId: {
        type: Schema.Types.ObjectId,
        ref: "Batch",
        required: false
    },
    memberStatus: {
        type: String,
        enum: ["new", "active", "inactive"],
        default: "new",
    },
    memberLevel: {
        type: String,
        enum: ["applicant", "member", "admin", "founder"],
        default: "applicant",
    },
    memberSince: {
        type: Date,
        required: false
    },
    acceptedBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: false
    }
}, {
    timestamps: true
});

const userSchema = new Schema<UserI>({
    email: {
        type: String,
        required: true,
    },
    nickname: {
        type: String,
        required: true,
    },
    weight: {
        type: String,
        required: false
    },
    membership: {
        type: membershipSchema,
        required: false
    }
});

export interface UserI {
    _id?: string,
    email: string,
    nickname: string,
    weight: string,
    membership: MembershipI
}

export interface MembershipI {
    chapterId: Schema.Types.ObjectId,
    batchId: Schema.Types.ObjectId,
    memberStatus: string,
    memberLevel: string,
    memberSince: Date,
    createdAt?: Date,
    acceptedBy?: Schema.Types.ObjectId
}

export const User = models.User || model<UserI>('User', userSchema)