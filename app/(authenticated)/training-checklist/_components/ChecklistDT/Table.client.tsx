"use client"

import { useOptimistic, useTransition } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
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

    const [optimisticData, updateOptimistic] = useOptimistic<
        TrainingChecklistICustom[],
        string
    >(
        initialData,
        (state, checklistId) =>
            state.map(row =>
                row._id === checklistId
                    ? {
                        ...row,
                        status: "completed",
                        dateApproved: new Date()
                    }
                    : row
            )
    )

    const onComplete = (checklistId: string) => {
        const toastId = toast.loading("Processing training...")
        startTransition(async () => {
            try {
                updateOptimistic(checklistId)
                const fd = new FormData()
                fd.append("checklistId", checklistId)
                fd.append("approvedBy", approvedBy)
                fd.append("applicantId", applicantId)
                await markAsCompleted(fd)
                toast.success("Training completed", { id: toastId })
            } catch {
                toast.error("Update failed", { id: toastId })
            }
        })
    }

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Training Name</TableHead>
                    <TableHead>Approved By</TableHead>
                    <TableHead className="w-[15%] text-center">Status</TableHead>
                    <TableHead className="w-[5%]">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {optimisticData.map(row => (
                    <TableRow key={row._id}>
                        <TableCell>{row.trainingName}</TableCell>
                        <TableCell>{row.approvedBy?.nickname}</TableCell>
                        <TableCell className="w-[15%] text-center capitalize">{row.status}</TableCell>

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
    )
}
