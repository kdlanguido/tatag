import { connectToMongoDB } from "@/lib/mongoose";
import { Highlight } from "@/model/Highlight.model";
import { cache } from "react";

export const getHighlights = cache(async () => {
    await connectToMongoDB();

    try {
        const highlights = await Highlight.find({}).sort({ createdAt: -1 }).lean();
        return highlights;
    } catch (error) {
        console.error("Failed to fetch highlights:", error);
        return [];
    }
});