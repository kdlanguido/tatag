"use client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { FilePenLine, MoreHorizontal, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button"
import { useActionState, useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { fetchProfile } from "@/actions/user";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { UserI } from "@/model/User.model";
import { approveMembershipRequest } from "@/actions/admin";
import { BatchI } from "@/model/Batch.model";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

export function ActionButtons({ batch }: { batch: BatchI }) {

    const [dialogIsVisible, setDialogIsVisible] = useState(false)
    const [userProfile, setProfile] = useState<UserI>()

    // const [state, action, pending] = useActionState(approveMembershipRequest, {
    //     success: false
    // })

    // const router = useRouter();

    // useEffect(() => {
    //     if (state.success) {

    //         toast.success("Notification", {
    //             description: "Membership update request has been approved successfully.",
    //         })

    //         setApproveReqIsVisible(!approveReqIsVisible)

    //         router.refresh()
    //     }
    // }, [state])

    useEffect(() => {
        const executeFetchProfile = async () => {
            const res = await fetchProfile()
            if (!res) return
            setProfile(res)
        }
        executeFetchProfile();
    }, [])

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    {userProfile?.membership?.memberLevel === "admin" && (
                        <>
                            <DropdownMenuSeparator />
                            <DropdownMenuLabel>Admin Options</DropdownMenuLabel>
                            <DropdownMenuItem onSelect={() => setDialogIsVisible(true)} >
                                <FilePenLine /> Update Status
                            </DropdownMenuItem>
                        </>
                    )}
                </DropdownMenuContent>
            </DropdownMenu>

            <Dialog open={dialogIsVisible} onOpenChange={setDialogIsVisible}>
                <DialogContent className="sm:max-w-[425px] [&>button]:hidden">
                    <form>
                        <DialogHeader>
                            <DialogTitle>Update Batch Status</DialogTitle>
                            <DialogDescription>Select current batch status</DialogDescription>
                        </DialogHeader>

                        <FieldGroup>
                            <Field className="mt-4">
                                <Field>
                                    <FieldLabel htmlFor="region">Region</FieldLabel>
                                    <Select name="region">
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

                            </Field>
                        </FieldGroup>
                        {/* <DialogFooter>
                            <Button type="submit" formAction={action} disabled={pending}>Approve</Button>
                            <Button type="button" variant="outline" onClick={() => setApproveReqIsVisible(!approveReqIsVisible)}>Cancel</Button>
                        </DialogFooter> */}
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}
