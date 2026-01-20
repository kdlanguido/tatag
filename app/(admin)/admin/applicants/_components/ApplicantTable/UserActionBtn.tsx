import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Contact, Dumbbell, Ellipsis, User, UserRoundCheck } from "lucide-react"
import Link from "next/link"
import { checkIfApplicantHasPendingTrainings } from "../../../_data/chapter";
import { updateApplicationPromoteTomember } from "@/actions/user";

export async function UserActionBtn(applicant: { applicant: UserIUI }) {

    if (!applicant.applicant._id) {
        return null
    }

    const hasPending = await checkIfApplicantHasPendingTrainings(applicant.applicant._id);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost"><Ellipsis className="h-4 w-4" /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <User className="mr-1 h-4 w-4" />
                        View Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href={`/admin/applications/${applicant.applicant._id}`}>
                            <Contact className="mr-1 h-4 w-4" />
                            View Application Form
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href={`/training-checklist/${applicant.applicant._id}`}>
                            <Dumbbell className="mr-1 h-4 w-4" />
                            View Training
                        </Link>
                    </DropdownMenuItem>

                    {
                        !hasPending ?
                            <DropdownMenuItem asChild>
                                <form action={updateApplicationPromoteTomember}>
                                    <input name="id" defaultValue={applicant.applicant._id} hidden/>
                                    <button type="submit" className="flex items-center w-full">
                                        <UserRoundCheck className="mr-1 h-4 w-4" />
                                        Promote to a Member
                                    </button>
                                </form>
                            </DropdownMenuItem>
                            : null

                    }
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
