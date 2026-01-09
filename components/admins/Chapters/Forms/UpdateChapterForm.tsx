"use client"

import Link from "next/link";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Field, FieldGroup, FieldLabel, FieldDescription } from "@/components/ui/field";
import { useActionState, useEffect, useState } from "react";
import { toast } from 'sonner';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserI } from "@/model/User.model";
import { regionList } from "@/lib/contants";
import { useDebounce } from "@/components/InputDebounce";
import { checkIfChapterNameExists, updateChapter } from "@/actions/chapter";
import { redirect } from "next/navigation";
import { ChapterI } from "@/model/Chapter.model";
import { formateDateToInputDate } from "@/lib/helpers";

export default function UpdateChapterForm({
    profile,
    chapterInfo
}: {
    profile: UserI,
    chapterInfo: ChapterI
}) {

    const [chapterExist, setChapterExist] = useState(false)
    const [chapterName, setChapterName] = useState('')
    const debouncedChapterName = useDebounce(chapterName, 200)

    useEffect(() => {
        if (chapterInfo?.name) {
            setChapterName(chapterInfo.name)
        }
    }, [])

    useEffect(() => {
        const checkIfChapterNameIsAvailable = async () => {
            if (chapterInfo?.name !== debouncedChapterName) {
                const res = await checkIfChapterNameExists(debouncedChapterName)
                setChapterExist(res)
            }
        }
        checkIfChapterNameIsAvailable();

    }, [debouncedChapterName])

    const [state, action, pending] = useActionState(updateChapter, {
        success: null
    })

    useEffect(() => {
        if (state.success === null) return

        if (state.success) {
            toast.success("Notification", {
                description: "Chapter has been updated successfully.",
            })
            redirect(`/admin/chapters/${chapterInfo?._id}`)
        } else {
            toast.success("Notification", {
                description: "Chapter update failed, please contact administrators.",
            })
        }
    }, [state])

    return (
        <div className='flex flex-1 flex-col gap-4 p-4'>

            <div className="w-full md:w-1/2">

                <div className="mb-5 text-center md:text-start">
                    <h1 className="font-semibold">Update Chapter Information</h1>
                    <h1 className=" text-sm text-muted-foreground">Chapter information</h1>
                </div>

                <form className="w-full" action={action}>
                    <Input type="text" name="userId" hidden defaultValue={profile._id} />
                    <Input type="text" name="chapterId" hidden defaultValue={chapterInfo._id} />

                    <FieldGroup className="gap-5">

                        <Field>
                            <FieldLabel htmlFor="name">Region</FieldLabel>
                            <Select name="region" defaultValue={chapterInfo?.region}>
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
                            <FieldLabel htmlFor="email">Chapter Name</FieldLabel>
                            <Input
                                name="name"
                                type="text"
                                className={`${chapterExist && "border border-red-500 "} capitalize mt-1`}
                                value={chapterName}
                                onChange={(e) => setChapterName(e.target.value)}
                            />
                            {chapterExist && <FieldDescription className="text-red-500 pt-0 text-xs">Chapter Name Exists</FieldDescription>}
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="email" >Slogan</FieldLabel>
                            <Input
                                name="slogan"
                                type="text"
                                defaultValue={chapterInfo?.slogan}
                            />
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="email" >HQ Address</FieldLabel>
                            <Input
                                name="hqAddress"
                                type="text"
                                defaultValue={chapterInfo?.hqAddress}
                            />
                        </Field>

                        <Field className="gap-1">
                            <FieldLabel htmlFor="email">Established Year</FieldLabel>
                            <Input
                                name="establishedYear"
                                type="date"
                                defaultValue={formateDateToInputDate(chapterInfo?.establishedYear)}
                            />
                        </Field>

                    </FieldGroup>
                    <div className="mt-4 text-end">
                        <Link href={`/admin/chapters/${chapterInfo?._id}`} className="mr-2">
                            <Button variant={"outline"}>Cancel</Button>
                        </Link>

                        <Button type="submit" disabled={chapterExist || pending}>Submit</Button>
                    </div>
                </form>

            </div>

        </div>
    )
}
