"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"

export function ChecklistActionBtn({
    checklistId,
    onComplete,
    disabled,
}: {
    checklistId: string,
    onComplete: (checklistId: string) => void,
    disabled: boolean
}) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Admin Options</DropdownMenuLabel>
                <DropdownMenuItem
                    onClick={() => onComplete(checklistId)}
                    disabled={disabled}
                >
                    Mark as Completed
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
