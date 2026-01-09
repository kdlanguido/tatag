"use client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal, User } from "lucide-react";
import { Button } from "@/components/ui/button"
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";

export function ActionButtons({ user }: { user: UserIUI }) {

    // const [approveReqIsVisible, setApproveReqIsVisible] = useState(false)

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
                    <>
                        <DropdownMenuSeparator />
                        <DropdownMenuLabel>Options</DropdownMenuLabel>
                        <DropdownMenuItem onSelect={() => { }} >
                            <User /> View Profile
                        </DropdownMenuItem>
                    </>
                </DropdownMenuContent>
            </DropdownMenu>
            {/* <Dialog open={approveReqIsVisible} onOpenChange={setApproveReqIsVisible}>
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
            </Dialog> */}
        </>
    )
}
