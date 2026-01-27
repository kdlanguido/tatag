"use client"

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Field, FieldGroup, FieldLabel, FieldDescription } from "@/components/ui/field";
import { use, useActionState, useEffect, useState } from "react";
import Link from "next/link";
import { toast } from 'sonner';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserI } from "@/model/User.model";
import { regionList } from "@/lib/contants";
import { useDebounce } from "@/components/InputDebounce";
import { checkIfChapterNameExists, createChapter } from "@/actions/chapter";
import { redirect } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { ChapterFounderField } from "../ChapterFounderField";

export default function CreateChapterForm({
    profileData,
    userList
}: {
    profileData: Promise<UserI>,
    userList: Promise<UserI[]>
}) {

    const profile = use(profileData)
    const users = use(userList)

    const [selectedRegion, setSelectedRegion] = useState("ncr");
    const [chapterExist, setChapterExist] = useState(false)
    const [chapterName, setChapterName] = useState('')

    const [state, action, pending] = useActionState(createChapter, {
        success: null
    })

    const debouncedChapterName = useDebounce(chapterName, 200)

    useEffect(() => {
        if (state.success === null) return

        if (state.success) {

            toast.success("Notification", {
                description: "Chapter has been created successfully.",
            })

            redirect("/admin/chapters")
        }

        if (!state.success) {
            toast.success("Notification", {
                description: "Encountered an error while creating the chapter.",
            })
        }
    }, [state])

    useEffect(() => {
        const checkIfChapterNameIsAvailable = async () => {
            const res = await checkIfChapterNameExists(debouncedChapterName)
            setChapterExist(res)
        }

        checkIfChapterNameIsAvailable();

    }, [debouncedChapterName])


    return (
        <div className='flex flex-1 flex-col gap-4 p-4'>
            <div className="w-full md:w-1/2">
                <div className="mb-5 text-center md:text-start">
                    <h1 className="font-semibold">Create a New Chapter</h1>
                    <h1 className=" text-sm text-muted-foreground">Chapter information</h1>
                </div>

                <form className="w-full" action={action}>
                    <Input type="text" name="userId" hidden defaultValue={profile._id} />

                    <FieldGroup className="gap-5">

                        <Field>
                            <FieldLabel htmlFor="region">Region</FieldLabel>
                            <Select name="region" onValueChange={(val) => { setSelectedRegion(val) }} value={selectedRegion}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select a chapter" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select your region</SelectLabel>
                                        {
                                            regionList.map((data, index) =>
                                                <SelectItem value={data.region} key={index}>
                                                    {data.label}
                                                </SelectItem>
                                            )
                                        }
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </Field>

                        <Field className="gap-1">
                            <FieldLabel htmlFor="name">Chapter Name</FieldLabel>
                            <Input
                                name="name"
                                type="text"
                                className={`${chapterExist && "border border-red-500 "} capitalize mt-1`}
                                value={chapterName}
                                onChange={(e) => setChapterName(e.target.value)}
                            />
                            {chapterExist && <FieldDescription className="text-red-500 pt-0 text-xs">Chapter Name Exists</FieldDescription>}
                        </Field>

                        <ChapterFounderField users={users} />

                        <Field>
                            <FieldLabel htmlFor="slogan" >Slogan</FieldLabel>
                            <Input
                                name="slogan"
                                type="text"
                                className="capitalize"
                            />
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="establishedYear" >Date Established</FieldLabel>
                            <Input
                                name="establishedYear"
                                type="date"
                                className="capitalize"
                            />
                        </Field>


                        <Field>
                            <FieldLabel htmlFor="logo" >Chapter Logo</FieldLabel>
                            <Input
                                name="logo"
                                type="file"
                            />
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="hqAddress" >Headquarter Address (Optional)</FieldLabel>
                            <Textarea
                                name="hqAddress"
                            />
                        </Field>

                    </FieldGroup>
                    <div className="mt-4 text-end">
                        <Link href="/admin/chapters" className="mr-2">
                            <Button variant={"outline"}>Cancel</Button>
                        </Link>
                        <Button type="submit" disabled={chapterExist || pending}>Submit</Button>
                    </div>
                </form>

            </div>

        </div>
    )
}
