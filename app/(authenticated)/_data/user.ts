"use server"

import { connectToMongoDB } from "@/lib/mongoose";
import { User, UserI } from "@/model/User.model";

const fetchUserProfile = async (email: string):Promise<UserI> => {
    await connectToMongoDB();
    const res = await User.findOne({ email }).lean();
    return JSON.parse(JSON.stringify(res));
}

export { fetchUserProfile };
