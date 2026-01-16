"use client"

import { Field, FieldGroup, FieldLabel, FieldDescription } from "@/components/ui/field";
import { useActionState, useEffect, useState } from "react";
import Link from "next/link";
import { toast } from 'sonner';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useDebounce } from "@/components/InputDebounce";
import { redirect } from "next/navigation";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BatchI } from "@/model/Batch.model";
import { formateDateToInputDate } from "@/lib/helpers";
import { checkIfBatchNameExists } from '@/app/(admin)/admin/_data/batch'
import { updateBatch } from "@/actions/batch";

export default function EditForm({
    batchId,
    batch
}: {
    batchId: string,
    batch: BatchI
}) {

    const [BatchExists, setBatchExists] = useState(false)
    const [batchName, setBatchName] = useState(batch.name)

    const [state, action, pending] = useActionState(updateBatch, {
        success: false
    })

    const debouncedBatchName = useDebounce(batchName, 200)

    useEffect(() => {
        if (state.success) {

            toast.success("Notification", {
                description: "Batch has been updated successfully.",
            })

            redirect(`/admin/chapters/${batch.chapterId}`)
        }
    }, [state])


    useEffect(() => {

        const checkIfBatchNameIsAvailable = async () => {
            
            const res = await checkIfBatchNameExists(debouncedBatchName, batch.chapterId.toString())
            
            if (debouncedBatchName.toLowerCase() === batch.name.toLowerCase()) {
                setBatchExists(false)
                return
            }

            setBatchExists(res)
        }

        checkIfBatchNameIsAvailable();
    }, [debouncedBatchName])

    return (
        <div className='flex flex-1 flex-col gap-4 p-4'>
            <div className="w-full md:w-1/2">
                <div className="mb-5 text-center md:text-start">
                    <h1 className="font-semibold">Edit Batch</h1>
                    <h1 className=" text-sm text-muted-foreground">Update batch information</h1>
                </div>
                <form className="w-full" action={action}>
                    <Input
                        defaultValue={batchId}
                        name="batchId"
                        hidden
                    />

                    <FieldGroup className="gap-5">
                        <Field className="gap-1">
                            <FieldLabel htmlFor="name">Batch Name</FieldLabel>
                            <Input
                                name="name"
                                type="text"
                                className={`${BatchExists && "border border-red-500 "} capitalize mt-1`}
                                value={batchName}
                                onChange={(e) => setBatchName(e.target.value)}
                            />
                            {BatchExists && <FieldDescription className="text-red-500 pt-0 text-xs">Batch Name Exists</FieldDescription>}
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="pruebaDate" >Prueba Date</FieldLabel>
                            <Input
                                name="pruebaDate"
                                type="date"
                                className="capitalize"
                                defaultValue={formateDateToInputDate(batch.pruebaDate)}
                            />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="status" >Status</FieldLabel>
                            <Select name="status" defaultValue={batch.status}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select a chapter" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a Status</SelectLabel>
                                        <SelectItem value="pending">
                                            Pending
                                        </SelectItem>
                                        <SelectItem value="completed">
                                            Completed
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </Field>
                    </FieldGroup>
                    <div className="mt-4 text-end">
                        <Link href={`/admin/chapters/${batch.chapterId}`} className="mr-2">
                            <Button variant={"outline"}>Cancel</Button>
                        </Link>
                        <Button type="submit" disabled={BatchExists || pending}>Submit</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
