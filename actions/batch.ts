'use server'

import { connectToMongoDB } from "@/lib/mongoose";
import { Batch, } from "@/model/Batch.model";

const createBatch = async (prevState: GenericInitState, formData: FormData) => {
    await connectToMongoDB();

    const res = await Batch.create({
        name: formData.get('name'),
        pruebaDate: formData.get('pruebaDate'),
        chapterId: formData.get('chapterId')
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

const updateBatch = async (prevState: GenericInitState, formData: FormData) => {
    try {
        await connectToMongoDB();

        const _id = formData.get('batchId') as string;
        const name = formData.get('name') as string;
        const rawDate = formData.get('pruebaDate') as string;

        if (!_id) return { success: false, error: "Missing ID" };

        const res = await Batch.findByIdAndUpdate(
            _id,
            {
                $set: {
                    name: name,
                    pruebaDate: rawDate ? new Date(rawDate) : null,
                    status: formData.get('status')
                }
            },
            { new: true } 
        );

        if (!res) return { success: false };

        return { success: true };
        
    } catch (error) {
        console.error("Update Error:", error);
        return { success: false };
    }
}

export {
    createBatch,
    updateBatch
}