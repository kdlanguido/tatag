import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ChecklistActionBtn } from "./ActionBtn"
import { formatDateToString } from "@/lib/helpers"
import { TrainingChecklistICustom } from "@/types/trainingChecklist"

export default function ChecklistDT({ checklistItems, isAdmin, applicantId }: { checklistItems: TrainingChecklistICustom[], isAdmin: boolean, applicantId: string }) {
  return (
    <div className="rounded-md border bg-card text-card-foreground shadow-sm">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead >Training Name</TableHead>
            <TableHead className="w-[25%] text-center"> Date Approved</TableHead>
            <TableHead className="w-[25%] text-center">Approved By</TableHead>
            <TableHead className="w-[8%] text-center">Status</TableHead>
            <TableHead className="w-[8%] text-center" hidden={!isAdmin}>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {checklistItems.map((checklist) => (
            <TableRow key={checklist._id} className="hover:bg-muted/50 transition-colors">
              <TableCell>{checklist.trainingName}</TableCell>
              <TableCell className="text-center">{checklist.dateApproved ? formatDateToString(checklist.dateApproved) : "--"}</TableCell>
              <TableCell className="text-center">{checklist.approvedBy ? checklist.approvedBy.nickname : "--"}</TableCell>
              <TableCell className="capitalize text-center">{checklist.status}</TableCell>
              <TableCell className="text-center" hidden={!isAdmin}>
                <ChecklistActionBtn checklist={checklist} applicantId={applicantId} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}