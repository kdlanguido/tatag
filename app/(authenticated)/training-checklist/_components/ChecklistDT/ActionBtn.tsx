import { markAsCompleted } from "@/actions/trainingChecklist"
import { fetchUserProfile } from "@/app/(authenticated)/_data/user"
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

export async function ChecklistActionBtn({checklist, applicantId}: { checklist: TrainingChecklistICustom, applicantId: string }) {
    const currentUser = await fetchUserProfile()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost"><Ellipsis className="h-4 w-4" /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                        <form className="w-full">
                            <input type="hidden" name="checklistId" value={checklist._id} />
                            <input type="hidden" name="approvedBy" value={currentUser._id} />
                            <input type="hidden" name="applicantId" value={applicantId} />
                            <button
                                type="submit"
                                formAction={markAsCompleted}
                                className="flex items-center gap-2"
                            >
                                <Check className="mr-2 h-4 w-4" />
                                <span>Mark as Completed</span>
                            </button>
                        </form>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
