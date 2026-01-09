'use server'

import { connectToMongoDB } from "@/lib/mongoose"
import { Training, TrainingI } from "@/model/Training.model"

const fetchTrainings = async (): Promise<TrainingI[]> => {
    await connectToMongoDB();

    const res = await Training.find({}).sort({ orderNo: 1 }).lean()

    return JSON.parse(JSON.stringify(res))
}

const fetchTrainingById = async (id: string): Promise<TrainingI> => {
    await connectToMongoDB();

    const res = await Training.findById({ _id: id }).lean()

    return JSON.parse(JSON.stringify(res))
}

const createTraining = async (prevState: GenericInitState, formData: FormData): Promise<GenericInitState> => {
    await connectToMongoDB()

    //validation

    const name = formData.get('name') as string
    const description = formData.get('description') as string

    const current = await Training.find({})

    const newCount = current.length + 1

    const res = Training.create({
        name,
        description,
        orderNo: newCount
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

const updateTraining = async (
    prevState: GenericInitState,
    formData: FormData
): Promise<GenericInitState> => {
    await connectToMongoDB();

    const _id = formData.get('trainingId') as string;
    const name = formData.get('name') as string;
    const description = formData.get('description') as string;

    const updatedTraining = await Training.findByIdAndUpdate(
        _id,
        {
            $set: {
                name,
                description,
            },
        },
    );

    if (!updatedTraining) {
        return { success: false };
    }

    return {
        success: true,
    };
};

const moveTraining = async (_id: string, mode: string) => {
    await connectToMongoDB();

    const training = await Training.findById(_id)
    const allTrainings = await Training.find({})

    if (!training) {
        return {
            success: false,
            message: "training not found!"
        }
    }

    const getOrderNo = () => {
        if (mode === 'up') {
            if (training.orderNo === 1) {
                return false
            } else {
                return training.orderNo - 1
            }
        } else {
            if (allTrainings.length === training.orderNo) {
                return false
            } else {
                return training.orderNo + 1
            }
        }
    }

    const orderNo = getOrderNo()

    if (!orderNo) {
        return {
            success: true
        }
    }

    const currTraining = await Training.findOne({ orderNo })

    const res1 = await Training.findByIdAndUpdate(training._id, {
        orderNo
    })

    if (!res1) {
        return {
            success: false
        }
    }


    const res2 = await Training.findByIdAndUpdate(currTraining._id, {
        orderNo: training.orderNo
    })

    if (!res2) {
        return {
            success: false
        }


    } else {

        return {
            success: true
        }
    }
}

export {
    fetchTrainings,
    fetchTrainingById,
    createTraining,
    updateTraining,
    moveTraining,
}