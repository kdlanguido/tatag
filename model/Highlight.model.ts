import { model, models, Schema } from "mongoose";

const schema = new Schema<HighlightI>({
    title: {
        type: String,
    },
    description: {
        type: String,
    }
}, {
    timestamps: true
})

type HighlightI = {
    _id?: String,
    title: String,
    description: String,
    createdAt?: Date,
    updatedAt?: Date,
}

export const Highlight = models.Highlight || model("Highlight", schema)