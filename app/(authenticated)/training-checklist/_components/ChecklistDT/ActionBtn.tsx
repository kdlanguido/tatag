import { markAsCompleted } from "@/actions/trainingChecklist"
import { cachedCurrentUserProfile, fetchUserProfile } from "@/app/(authenticated)/_data/user"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { TrainingChecklistICustom } from "@/types/trainingChecklist"
import { Check, Ellipsis } from "lucide-react"

export async function ChecklistActionBtn({ checklist, applicantId }: { checklist: TrainingChecklistICustom, applicantId: string }) {

    const { _id } = await cachedCurrentUserProfile()

    return (

        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost">
                        <Ellipsis className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuGroup>
                        <DropdownMenuItem asChild>
                            <button
                                type="submit"
                                formAction={markAsCompleted}
                                form={`form-${checklist._id}`}
                                className="flex items-center gap-2 w-full"
                            >
                                <Check className="mr-2 h-4 w-4" />
                                <span>Mark as Completed</span>
                            </button>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
            <form id={`form-${checklist._id}`} method="post">
                <input type="hidden" name="checklistId" value={checklist._id} />
                <input type="hidden" name="approvedBy" value={_id} />
                <input type="hidden" name="applicantId" value={applicantId} />
            </form>
        </>
    )
}
