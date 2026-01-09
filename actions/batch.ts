'use server'

import { connectToMongoDB } from "@/lib/mongoose";
import { Batch, BatchI } from "@/model/Batch.model";
import mongoose from "mongoose";

const fetchBatchByChapterId = async (selectedChapterId: string): Promise<BatchI[]> => {
    await connectToMongoDB();

    const objectId = new mongoose.Types.ObjectId(selectedChapterId);

    const batches = await Batch.find({ chapterId: objectId }).lean()

    return JSON.parse(JSON.stringify(batches));
}

const createBatch = async (prevState: GenericInitState, formData: FormData) => {
    await connectToMongoDB();

    const pruebaDate = formData.get('pruebaDate')
    const name = formData.get('name')
    const chapterId = formData.get('chapterId')

    const res = await Batch.create({
        name,
        pruebaDate,
        chapterId
    })

    if (!res) {
        return {
            success: false
        }
    }

    return {
        success: true
    }
}

const checkIfBatchNameExists = async (name: string, _id: string): Promise<boolean> => {
    await connectToMongoDB();

    const isExisting = await Batch.findOne({ name }).where({ _id });

    if (!isExisting) {
        return false
    }

    return true
}

export {
    fetchBatchByChapterId,
    createBatch,
    checkIfBatchNameExists
}