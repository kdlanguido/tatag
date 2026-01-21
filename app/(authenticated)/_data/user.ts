"use server"

import { auth } from "@/lib/auth";
import { connectToMongoDB } from "@/lib/mongoose";
import { redis } from "@/lib/redis";
import { User, UserI } from "@/model/User.model";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const cachedCurrentUserProfile = async (): Promise<UserI> => {

    const session = await auth.api.getSession({ headers: await headers() })

    const key = `user:profile:${session?.user?.email}`

    const cached = await redis?.get(key)
    if (cached) return JSON.parse(cached) as UserI

    await connectToMongoDB();

    const profile = await User.findOne({ email: session?.user?.email }).lean() as UserI | null

    if (!profile) {
        redirect("/login")
    }

    await redis?.set(key, JSON.stringify(profile), "EX", 300) // 5 mins

    return profile
}


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
export {
    fetchUserProfile,
    fetchUserProfileById,
    checkIfUserIsAdmin,
    cachedCurrentUserProfile
};
