"use server"

import { auth } from "@/lib/auth"
import { connectToMongoDB } from "@/lib/mongoose"
import { User, UserI } from "@/model/User.model"
import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { cache } from "react"
import { redis } from "@/lib/redis"


const fetchProfile = cache(async (id?: string): Promise<UserI> => {

    console.log('fetchProfile executed! ')

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

export { fetchProfile }