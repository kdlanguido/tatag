"use server"

import { connectToMongoDB } from "@/lib/mongoose"
import { Batch, BatchI } from "@/model/Batch.model";
import {  Types } from "mongoose";

export const fetchBatchById = async (batchId: string) => {
    await connectToMongoDB();
    const batch = await Batch.findById(batchId).lean();
    const res = JSON.parse(JSON.stringify(batch));
    return res
}

export const fetchBatchByChapterId = async (selectedChapterId: string): Promise<BatchI[]> => {
    await connectToMongoDB();

    const objectId = new Types.ObjectId(selectedChapterId);

    const batches = await Batch.find({ chapterId: objectId }).lean()

    return JSON.parse(JSON.stringify(batches));
}

export const checkIfBatchNameExists = async (name: string, chapter_id: string): Promise<boolean> => {
    await connectToMongoDB();
    const chapterId = new Types.ObjectId(chapter_id);
    const isExisting = await Batch.findOne({ name }).where({ chapterId });
    return !!isExisting
}

