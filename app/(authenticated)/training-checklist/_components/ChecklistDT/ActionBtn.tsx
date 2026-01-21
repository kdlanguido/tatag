"use client"

import { markAsCompleted } from "@/actions/trainingChecklist"
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
import { useTransition } from "react"
import { toast } from "sonner"

export function ChecklistActionBtn({
  checklist,
  applicantId,
  approvedBy,
}: {
  checklist: TrainingChecklistICustom
  applicantId: string
  approvedBy: string
}) {
  const [isPending, startTransition] = useTransition()

  const handleMarkCompleted = () => {
    const toastId = toast.loading("Processing training completion...")

    startTransition(async () => {
      try {
        const formData = new FormData()
        formData.append("checklistId", checklist._id as string)
        formData.append("approvedBy", approvedBy)
        formData.append("applicantId", applicantId)

        await markAsCompleted(formData)

        toast.success("Training marked as completed", {
          id: toastId,
        })
      } catch (err) {
        toast.error("Something went wrong", {
          id: toastId,
        })
      }
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" disabled={isPending}>
          <Ellipsis className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>

        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={handleMarkCompleted}
            disabled={isPending}
            className="flex items-center gap-2"
          >
            <Check className="h-4 w-4" />
            Mark as Completed
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
