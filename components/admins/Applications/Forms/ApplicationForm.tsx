"use client"

import { updateUserAcceptApplication } from '@/actions/user'
import { Button } from '@/components/ui/button'
import { Field, FieldDescription, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { formatDateToString } from '@/lib/helpers'
import { BatchI } from '@/model/Batch.model'
import { useRouter } from 'next/navigation'
import { useActionState, useEffect } from 'react'
import { toast } from 'sonner'

export default function ApplicationForm({ applicationInformation, batches, adminId }: {
    applicationInformation: ApplicantInformationI,
    batches: BatchI[]
    adminId: string
}) {

    if (!applicationInformation) return null

    const [state, action, isPending] = useActionState(updateUserAcceptApplication, {
        success: null
    })

    const router = useRouter();

    useEffect(() => {
        if (state.success) {
            toast.success("Notification", {
                description: "Applicant has been accepted successfully.",
            })

            router.push("/admin/dashboard")
        }
    }, [state])


    return (
        <div className='w-full md:w-1/2'>
            <form action={action}>
                <FieldGroup>
                    <Field className="gap-1">
                        <FieldLabel htmlFor="name">Nickname</FieldLabel>
                        <Input
                            name="name"
                            type="text"
                            readOnly
                            defaultValue={applicationInformation.nickname}
                        />
                    </Field>

                     <Field className="gap-1">
                        <FieldLabel htmlFor="name">Email</FieldLabel>
                        <Input
                            name="name"
                            type="text"
                            readOnly
                            defaultValue={applicationInformation.email}
                        />
                    </Field>

                    <Field className="gap-1">
                        <FieldLabel htmlFor="name">Chapter Name</FieldLabel>
                        <Input
                            name="name"
                            type="text"
                            readOnly
                            defaultValue={applicationInformation.chapter.name}
                        />
                    </Field>

                    <Field className="gap-1">
                        <FieldLabel htmlFor="name">Date Applied</FieldLabel>
                        <Input
                            name="name"
                            type="text"
                            readOnly
                            defaultValue={applicationInformation.membership.createdAt ? formatDateToString(applicationInformation.membership.createdAt) : ""}
                        />
                    </Field>

                    <Field>
                        <FieldLabel htmlFor="name">Batch</FieldLabel>
                        <Select name="batchId" defaultValue={
                            batches.length > 0
                                ? batches[batches.length - 1]._id?.toString()
                                : undefined
                        }
                            disabled={applicationInformation?.membership?.memberStatus === 'active'}
                        >
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select a Batch" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Select a Batch</SelectLabel>
                                    {
                                        batches.map((data, index) =>
                                            <SelectItem value={data._id ? data._id.toString() : ""} key={index}>
                                                {data.name}
                                            </SelectItem>
                                        )
                                    }
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        {
                            applicationInformation?.membership?.memberStatus !== 'active' &&
                            <FieldDescription> Don&apos;t forget to select a batch before accepting the applicant.</FieldDescription>
                        }

                    </Field>

                    <Input hidden defaultValue={applicationInformation._id} name='id'></Input>
                    <Input hidden defaultValue={adminId} name='adminId'></Input>

                    <Field>
                        <div className='flex gap-2 justify-end'>
                            {
                                applicationInformation?.membership?.memberStatus !== 'active' &&
                                <Button disabled={isPending}>{isPending ? "Processing..." : "Accept Applicant"} </Button>
                            }
                        </div>
                    </Field>
                </FieldGroup>
            </form>


        </div >
    )
}
