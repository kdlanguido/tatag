"use client"

import { useActionState, useEffect } from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { applyMembership } from '@/actions/user'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { UserI } from '@/model/User.model'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

interface PageProps {
    chaptersList: ChapterICustom[],
    profile: UserI
}

export default function ApplicationForm({ chaptersList, profile }: PageProps) {

    const [formState, applyMembershipAction, applyMembershipIsPending] = useActionState(applyMembership, {
        success: null,
    })

    const router = useRouter();

    useEffect(() => {
        if (formState.success) {
            toast("Notification", {
                description: "Application Success, Please give us time to review your application."
            })
            router.refresh();
        }
    }, [formState])

    return (
        <div className='flex flex-1 flex-col gap-4 p-4'>
            <div className="w-full md:w-1/2">

                <div className="mb-5">
                    <h1 className="font-semibold">Member Application</h1>
                    <h1 className=" text-sm text-muted-foreground">Please select the chapter to which you are applying for membership.</h1>
                </div>

                <form className="w-full">
                    <Input type="text" name="userId" hidden defaultValue={profile._id} />
                    <FieldGroup className="gap-5">
                        <Field>
                            <FieldLabel htmlFor="name">Chapter</FieldLabel>
                            <Select name="chapterId">
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select a chapter" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Chapter List</SelectLabel>
                                        {
                                            chaptersList.map((chapter, index) =>
                                                <SelectItem value={chapter?._id} key={index}>
                                                    {chapter.name}
                                                </SelectItem>
                                            )
                                        }
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </Field>
                    </FieldGroup>
                    <Button className="mt-4 ml-auto" type="submit" disabled={applyMembershipIsPending} formAction={applyMembershipAction}>
                        Submit Application
                    </Button>
                </form>
            </div>

        </div>
    )
}