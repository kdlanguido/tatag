"use server"

import { auth } from "@/lib/auth"
import { connectToMongoDB } from "@/lib/mongoose"
import { redis } from "@/lib/redis"
import { User, UserI } from "@/model/User.model"
import { Users } from "lucide-react"
import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { cache } from "react"


const fetchAllUsers = async (): Promise<UserI[]> => {

    const key = `allUsers`

    const cached = await redis?.get(key)

    if (cached) return JSON.parse(cached) as UserI[]

    await connectToMongoDB();

    const users = await User.find()

    await redis?.set(key, JSON.stringify(users), "EX", 300)

    return JSON.parse(JSON.stringify(cached))

}


const fetchProfile = cache(async (id?: string): Promise<UserI> => {

    await connectToMongoDB()

    const session = await auth.api.getSession({ headers: await headers() })

    if (!session) {
        redirect("/login")
    }

    if (!id) {
        const profile = await User.findOne({ email: session.user.email }).lean();
        return JSON.parse(JSON.stringify(profile));
    } else {
        const profile = await User.findById({ _id: id }).lean();
        return JSON.parse(JSON.stringify(profile));
    }

})


const cachedCurrentUserProfile = async (): Promise<UserI> => {
    const session = await auth.api.getSession({ headers: await headers() })

    const key = `user:profile:${session?.user?.email}`

    if (!session?.user?.email) {
        redirect('/login');
    }

    const cached = await redis?.get(key)

    if (cached) { return JSON.parse(cached) as UserI }

    await connectToMongoDB();

    const profile = await User.findOne({ email: session?.user?.email }).lean() as UserI | null

    if (!profile) {
        redirect("/register")
    }

    await redis?.set(key, JSON.stringify(profile), "EX", 300)

    return JSON.parse(JSON.stringify(profile))
}

export {
    fetchProfile,
    fetchAllUsers
}