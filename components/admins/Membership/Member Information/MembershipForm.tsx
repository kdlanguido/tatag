"use client"

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { use, useActionState, useEffect, useState } from "react";
import { toast } from 'sonner';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChapterI } from "@/model/Chapter.model";
import { UserI } from "@/model/User.model";
import { BatchI } from "@/model/Batch.model";
import { createMembershipUpdateRequest } from "@/actions/user";
import { fetchBatchByChapterId } from "@/app/(admin)/admin/_data/batch";

export default function MembershipForm({
    chapters,
    profileData
}: {
    chapters: Promise<ChapterI[]>,
    profileData: Promise<UserI>
}) {

    const chapterList = use(chapters)
    const profile = use(profileData)

    const [selectedChapter, setSelectedChapter] = useState(
        profile?.membership?.chapterId?.toString() || ""
    );

    const [selectedBatchId, setSelectedBatchId] = useState(profile?.membership?.batchId?.toString() || "");

    const [batchList, setBatches] = useState<BatchI[]>([])

    const [state, action, pending] = useActionState(createMembershipUpdateRequest, {
        success: false,
        previousBatchId: profile?.membership?.batchId?.toString() || "",
        previousChapterId: profile?.membership?.chapterId?.toString() || "",
        status: 0
    })

    const handleSelectedChapterChange = async (value: string) => {
        setSelectedChapter(value)
        const res = await fetchBatchByChapterId(value)
        setBatches(res)
    }

    useEffect(() => {
        const initialFetchBatch = async () => {
            const chapterIdTemp = chapterList[0]._id
            const res = await fetchBatchByChapterId(chapterIdTemp?.toString() ?? "")
            setBatches(res)

            if (profile?.membership?.batchId) {
                setSelectedBatchId(profile?.membership?.batchId.toString())
            }
        }

        initialFetchBatch();

    }, [])

    useEffect(() => {
        if (state.success) {
            toast.success("Notification", {
                description: "Request to change Chapter or Batch sent successfully.",
            })
        }

        if (state.status === 400) {
            toast.success("Notification", {
                description: "There is a pending request under review, please cancel it to make a new request.",
            })
        }

        if (state.status === 402) {
            toast.success("Notification", {
                description: "No changes detected.",
            })
        }
    }, [state])

    return (
        <div className='flex flex-1 flex-col gap-4 p-4'>

            <div className="w-full md:w-1/2">
                <div className="mb-5">
                    <h1 className="font-semibold">Membership Information</h1>
                    <h1 className=" text-sm text-muted-foreground">Manage your membership information</h1>
                </div>

                <form className="w-full" action={action}>
                    <Input type="text" name="userId" hidden defaultValue={profile._id} />

                    <FieldGroup className="gap-5">

                        <Field>
                            <FieldLabel htmlFor="name">Chapter</FieldLabel>
                            <Select name="chapterId" onValueChange={handleSelectedChapterChange} value={selectedChapter}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select a chapter" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Chapter List</SelectLabel>
                                        {
                                            chapterList.map((chapter, index) =>
                                                <SelectItem value={chapter._id ?? ""} key={index}>
                                                    {chapter.name}
                                                </SelectItem>
                                            )
                                        }
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="name">Batch</FieldLabel>
                            <Select name="batchId" value={selectedBatchId} onValueChange={(value) => setSelectedBatchId(value)}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select a batch" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Batch List</SelectLabel>
                                        {
                                            batchList.map((batch, index) =>
                                                <SelectItem value={(batch._id && (batch._id).toString()) ?? ""} key={index}>
                                                    {batch.name}
                                                </SelectItem>
                                            )
                                        }
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="email" >Member Type</FieldLabel>
                            <Input
                                name="text"
                                type="text"
                                className="bg-gray-100 text-gray-500 border-gray-300 cursor-not-allowed opacity-70 capitalize"
                                defaultValue={profile?.membership?.memberLevel}
                                readOnly
                            />
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="email" >Member Status</FieldLabel>
                            <Input
                                name="text"
                                type="text"
                                className="bg-gray-100 text-gray-500 border-gray-300 cursor-not-allowed opacity-70 capitalize"
                                defaultValue={profile?.membership?.memberStatus}
                                readOnly
                            />
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="email" >Member Since</FieldLabel>
                            <Input
                                name="text"
                                type="text"
                                className="bg-gray-100 text-gray-500 border-gray-300 cursor-not-allowed opacity-70 capitalize"
                                defaultValue={profile?.membership?.memberSince?.toString() ?? "Awaiting Prueba De Fuerza..."}
                                readOnly
                            />
                        </Field>
                    </FieldGroup>
                    <Button className="mt-4 ml-auto" type="submit" disabled={pending}>Request an Update</Button>
                </form>
            </div>

        </div>
    )
}
