"use client"

import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { use, useActionState, useEffect } from "react";
import { updateUserProfile } from "@/actions/user";
import { toast } from 'sonner';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { UserI } from "@/model/User.model";

export default function ProfileForm({
    profile,
}: {
    profile: Promise<UserI>
}) {

    const session = authClient.useSession();
    const ProfileData = use(profile)

    const [state, action, pending] = useActionState(updateUserProfile, {
        weight: ProfileData?.weight,
        nickname: ProfileData?.nickname,
        success: false
    })

    useEffect(() => {
        if (state.success) {
            toast.success("Notification", {
                description: "Profile updated successfully.",
            })
        }
    }, [state])

    return (
        <div className='flex flex-1 flex-col gap-4 p-4'>

            <div className="w-full md:w-1/2">
                <div className="mb-5">
                    <h1 className="font-semibold">Profile</h1>
                    <h1 className=" text-sm text-muted-foreground">Edit your profile</h1>
                </div>

                <form className="w-full" action={action}>
                    <FieldGroup className="gap-5">
                        <Field>
                            <FieldLabel htmlFor="name">Full Name</FieldLabel>
                            <Input
                                name="name"
                                type="text"
                                className="bg-gray-100 text-gray-500 border-gray-300 cursor-not-allowed opacity-70 capitalize"
                                defaultValue={session.data?.user.name}
                                readOnly
                            />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="email" >Email</FieldLabel>
                            <Input
                                name="email"
                                type="email"
                                className="bg-gray-100 text-gray-500 border-gray-300 cursor-not-allowed opacity-70"
                                defaultValue={session.data?.user.email}
                                readOnly
                            />
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="nickname" >Nickname</FieldLabel>
                            <Input
                                name="nickname"
                                type="text"
                                defaultValue={ProfileData?.nickname}
                            />
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="email">Weight</FieldLabel>
                            <Input
                                name="weight"
                                type="number"
                                placeholder="Your weight in Kilograms (KG)"
                                defaultValue={ProfileData?.weight}
                                required
                            />
                        </Field>

                    </FieldGroup>
                    <Button className="mt-4 ml-auto" type="submit" disabled={pending}>Save Changes</Button>
                </form>
            </div>

        </div>
    )
}
