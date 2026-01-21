"use client"

import { useTransition } from "react"
import { useRouter } from "next/navigation"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { markAsCompleted } from "@/actions/trainingChecklist"
import { ChecklistActionBtn } from "./ActionBtn"
import { toast } from "sonner"
import { TrainingChecklistICustom } from "@/types/trainingChecklist"

interface Props {
    initialData: TrainingChecklistICustom[]
    applicantId: string
    isAdmin: boolean
    approvedBy: string
}

export function ChecklistTableClient({
    initialData,
    applicantId,
    isAdmin,
    approvedBy,
}: Props) {
    const [isPending, startTransition] = useTransition()
    const router = useRouter()

    const onComplete = (checklistId: string) => {
        const toastId = toast.loading("Processing training...")

        startTransition(async () => {
            try {
                const fd = new FormData()
                fd.append("checklistId", checklistId)
                fd.append("approvedBy", approvedBy)
                fd.append("applicantId", applicantId)
                await markAsCompleted(fd)
                toast.success("Training completed", { id: toastId })
                router.refresh()
            } catch {
                toast.error("Update failed", { id: toastId })
            }
        })
    }

    return (
        <div className="rounded-md border bg-card text-card-foreground shadow-sm">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Training Name</TableHead>
                        <TableHead>Approved By</TableHead>
                        <TableHead className="text-center">Status</TableHead>
                        {isAdmin && <TableHead className="w-[5%] text-center">Action</TableHead>}
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {initialData.map(row => (
                        <TableRow key={row._id}>
                            <TableCell>{row.trainingName}</TableCell>
                            <TableCell>{row.approvedBy?.nickname}</TableCell>
                            <TableCell className="text-center capitalize">
                                {row.status}
                            </TableCell>

                            {isAdmin && (
                                <TableCell className="text-center">
                                    <ChecklistActionBtn
                                        checklistId={row._id ?? ""}
                                        onComplete={onComplete}
                                        disabled={isPending}
                                    />
                                </TableCell>
                            )}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
