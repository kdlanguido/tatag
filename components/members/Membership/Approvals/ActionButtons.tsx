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
import { cancelMembershipUpdateRequest, fetchProfile } from "@/actions/user";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { UserI } from "@/model/User.model";

export function ActionButtons({ reqId, email }: { reqId: string, email: string }) {

    const [cancelReqIsVisible, setCancelReqIsVisible] = useState(false)
    const [userProfile, setProfile] = useState<UserI>()

    const session = authClient.useSession();

    const [state, action, pending] = useActionState(cancelMembershipUpdateRequest, {
        success: false
    })

    const router = useRouter();

    useEffect(() => {
        if (state.success) {

            toast.success("Notification", {
                description: "Membership update request has been cancelled successfully.",
            })

            setCancelReqIsVisible(!cancelReqIsVisible)

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

                    {session.data?.user.email === email && (
                        <>
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem className="text-red-500" onSelect={() => setCancelReqIsVisible(true)} >
                                <Trash2 className="text-red-500" /> Cancel Request
                            </DropdownMenuItem>
                        </>
                    )}

                </DropdownMenuContent>
            </DropdownMenu>

            <Dialog open={cancelReqIsVisible} onOpenChange={setCancelReqIsVisible}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Cancel Request</DialogTitle>
                        <DialogDescription>
                            Provide a reason for cancelling your request.
                        </DialogDescription>
                    </DialogHeader>
                    <form>
                        <FieldGroup className="pb-3">
                            <Field>
                                <Textarea id="cancelReason" name="cancelReason" placeholder="Please enter your reason of cancellation" required />
                                <Input hidden name="reqId" defaultValue={reqId} />
                            </Field>
                        </FieldGroup>
                        <DialogFooter>
                            <Button type="submit" formAction={action} disabled={pending}>Proceed</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}
