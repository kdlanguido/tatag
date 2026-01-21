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
import { Suspense } from "react"
import { ChecklistTableSkeleton } from "./Skeleton"
import { fetchTrainingChecklist } from "@/app/(authenticated)/_data/trainingChecklist"
import { cachedCurrentUserProfile } from "@/app/(authenticated)/_data/user"
import { redirect } from "next/navigation"

export async function ChecklistDT({ isAdmin, applicantId }: { isAdmin: boolean, applicantId: string }) {
  
  const checklistItems = await fetchTrainingChecklist(applicantId);
  const { _id } = await cachedCurrentUserProfile()

  if (!_id) redirect("/login")

  return (
    <Suspense fallback={<ChecklistTableSkeleton />}>
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
                  <ChecklistActionBtn checklist={checklist} applicantId={applicantId} approvedBy={_id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Suspense>
  )
}