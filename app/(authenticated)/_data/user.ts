"use server"

import { auth } from "@/lib/auth";
import { connectToMongoDB } from "@/lib/mongoose";
import { User, UserI } from "@/model/User.model";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const fetchUserProfile = async (email?: string): Promise<UserI> => {
    await connectToMongoDB()

    const session = await auth.api.getSession({ headers: await headers() })

    if (!session) {
        redirect("/login")
    }

    const profile = await User.findOne({ email: session.user.email }).lean();
    return JSON.parse(JSON.stringify(profile));
}

const fetchUserProfileById = async (id: string): Promise<UserI> => {
    await connectToMongoDB();
    const res = await User.findById(id).lean();
    return JSON.parse(JSON.stringify(res));
}


const checkIfUserIsAdmin = async (): Promise<boolean> => {
    await connectToMongoDB();

    const session = await auth.api.getSession({ headers: await headers() })

    const user = await User.findOne({ email: session?.user.email })

    if (!user) {
        return false
    }

    if (user.membership.memberLevel !== 'admin') {
        return false
    }

    return true
}
export { fetchUserProfile, fetchUserProfileById, checkIfUserIsAdmin };
