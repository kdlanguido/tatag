import { model, models, Schema } from "mongoose";

export interface ChapterI {
    _id?: string;
    name: string;
    logo: string;
    logoFileKey: string;
    slogan: string;
    region: string;
    founder: Schema.Types.ObjectId;
    establishedYear: Date;
    hqAddress?: string;
}

const chapterSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    logo: {
        type: String,
        required: true,
    },
    logoFileKey: {
        type: String,
        required: true,
    },
    slogan: {
        type: String,
        required: true,
    },
    region: {
        type: String,
        required: true,
    },
    founder: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    establishedYear: {
        type: Date,
        required: true,
    },
    hqAddress: {
        type: String,
        required: false,
    },
});

export const Chapter = models.Chapter || model<ChapterI>('Chapter', chapterSchema)