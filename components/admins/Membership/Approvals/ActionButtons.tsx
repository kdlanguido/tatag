"use client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button"
import { useActionState, useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { fetchProfile } from "@/actions/user";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { UserI } from "@/model/User.model";
import { approveMembershipRequest } from "@/actions/admin";

export function ActionButtons({ reqId }: { reqId: string }) {

    const [approveReqIsVisible, setApproveReqIsVisible] = useState(false)
    const [userProfile, setProfile] = useState<UserI>()

    const [state, action, pending] = useActionState(approveMembershipRequest, {
        success: false
    })

    const router = useRouter();

    useEffect(() => {
        if (state.success) {

            toast.success("Notification", {
                description: "Membership update request has been approved successfully.",
            })

            setApproveReqIsVisible(!approveReqIsVisible)

            router.refresh()
        }
    }, [state])

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
                            <DropdownMenuItem onSelect={() => setApproveReqIsVisible(true)} >
                                <Trash2 /> Approve
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-500" onSelect={() => setApproveReqIsVisible(true)} >
                                <Trash2 className="text-red-500" /> Decline
                            </DropdownMenuItem>
                        </>
                    )}

                </DropdownMenuContent>
            </DropdownMenu>

            <Dialog open={approveReqIsVisible} onOpenChange={setApproveReqIsVisible}>
                <DialogContent className="sm:max-w-[425px] [&>button]:hidden">
                    <DialogHeader>
                        <DialogTitle>Approve Request</DialogTitle>
                        <DialogDescription className="pt-2">
                            Do you want to approve this Membership Request?
                        </DialogDescription>
                    </DialogHeader>
                    <form>
                        <FieldGroup>
                            <Field>
                                <Input hidden name="reqId" defaultValue={reqId} />
                                <Input hidden name="approvedBy" defaultValue={userProfile?._id} />
                            </Field>
                        </FieldGroup>
                        <DialogFooter>
                            <Button type="submit" formAction={action} disabled={pending}>Approve</Button>
                            <Button type="button" variant="outline" onClick={() => setApproveReqIsVisible(!approveReqIsVisible)}>Cancel</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}
