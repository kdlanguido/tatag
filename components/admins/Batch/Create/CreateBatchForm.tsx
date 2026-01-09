"use client"

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Field, FieldGroup, FieldLabel, FieldDescription } from "@/components/ui/field";
import { use, useActionState, useEffect, useState } from "react";
import Link from "next/link";
import { toast } from 'sonner';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserI } from "@/model/User.model";
import { useDebounce } from "@/components/InputDebounce";
import { redirect } from "next/navigation";
import { checkIfBatchNameExists, createBatch } from "@/actions/batch";

export default function CreateBatchForm({
    profileData,
    chapterId
}: {
    profileData: UserI,
    chapterId: string
}) {

    const [BatchExists, setBatchExists] = useState(false)
    const [chapterName, setChapterName] = useState('')

    const [state, action, pending] = useActionState(createBatch, {
        success: false
    })

    const debouncedChapterName = useDebounce(chapterName, 200)

    useEffect(() => {
        if (state.success) {

            toast.success("Notification", {
                description: "Batch has been created successfully.",
            })

            redirect("/admin/chapters/" + chapterId)
        }
    }, [state])


    useEffect(() => {
        const checkIfBatchNameIsAvailable = async () => {
            const res = await checkIfBatchNameExists(debouncedChapterName, chapterId)
            setBatchExists(res)
        }

        checkIfBatchNameIsAvailable();

    }, [debouncedChapterName])

    return (
        <div className='flex flex-1 flex-col gap-4 p-4'>

            <div className="w-full md:w-1/2">

                <div className="mb-5 text-center md:text-start">
                    <h1 className="font-semibold">Create a Batch</h1>
                    <h1 className=" text-sm text-muted-foreground">Batch information</h1>
                </div>

                <form className="w-full" action={action}>
                    <Input type="text" name="userId" hidden defaultValue={profileData._id} />

                    <FieldGroup className="gap-5">

                        <Field className="gap-1">
                            <FieldLabel htmlFor="email">Batch Name</FieldLabel>
                            <Input
                                name="name"
                                type="text"
                                className={`${BatchExists && "border border-red-500 "} capitalize mt-1`}
                                value={chapterName}
                                onChange={(e) => setChapterName(e.target.value)}
                            />
                            {BatchExists && <FieldDescription className="text-red-500 pt-0 text-xs">Chapter Name Exists</FieldDescription>}
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="email" >Prueba Date</FieldLabel>
                            <Input
                                name="pruebaDate"
                                type="date"
                                className="capitalize"
                            />
                        </Field>

                        <Input
                            defaultValue={chapterId}
                            name="chapterId"
                            hidden
                        />

                    </FieldGroup>
                    <div className="mt-4 text-end">
                        <Link href={`/admin/chapters/${chapterId}`} className="mr-2">
                            <Button variant={"outline"}>Cancel</Button>
                        </Link>

                        <Button type="submit" disabled={BatchExists || pending}>Submit</Button>
                    </div>
                </form>

            </div>

        </div>
    )
}
