"use client"

import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { use, useActionState, useEffect } from "react";
import Link from "next/link";
import { toast } from 'sonner';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserI } from "@/model/User.model";
import { redirect } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { updateTraining } from "@/actions/training";
import { TrainingI } from "@/model/Training.model";

export default function UpdateTrainingForm({
    trainingInformation
}: {
    trainingInformation: TrainingI
}) {

    const [state, action, pending] = useActionState(updateTraining, {
        success: null
    })

    useEffect(() => {
        if (state.success === null) return

        if (state.success) {

            toast.success("Notification", {
                description: "Training has been updated successfully.",
            })

            redirect("/admin/trainings")
        }

        if (!state.success) {
            toast.success("Notification", {
                description: "Encountered an error while updating the training.",
            })
        }
    }, [state])

    return (
        <div className='flex flex-1 flex-col gap-4 p-4'>

            <div className="w-full md:w-1/2">

                <div className="mb-5 text-center md:text-start">
                    <h1 className="font-semibold">Update Training</h1>
                    <h1 className=" text-sm text-muted-foreground">Update training information</h1>
                </div>

                <form className="w-full" action={action}>
                    <Input type="text" name="trainingId" hidden defaultValue={trainingInformation._id} />

                    <FieldGroup className="gap-5">
                        <Field className="gap-1">
                            <FieldLabel htmlFor="name">Training Name</FieldLabel>
                            <Input
                                name="name"
                                type="text"
                                className={`capitalize mt-1`}
                                defaultValue={trainingInformation.name}
                            />
                        </Field>
                        <Field className="gap-1">
                            <FieldLabel htmlFor="description">Description</FieldLabel>
                            <Textarea
                                name="description"
                                className={`capitalize mt-1`}
                                defaultValue={trainingInformation.description}
                            />
                        </Field>
                    </FieldGroup>

                    <div className="mt-4 text-end">
                        <Link href="/admin/trainings" className="mr-2">
                            <Button variant={"outline"}>Cancel</Button>
                        </Link>
                        <Button type="submit" disabled={pending}>Submit</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
