import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { UserActionBtn } from "./UserActionBtn"
import { formatDateToString } from "@/lib/helpers"

export default function ApplicantTable({ applicants }: { applicants: UserIUI[] }) {
  console.log(applicants)
  return (
    <div className="rounded-md border bg-card text-card-foreground shadow-sm">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead >Nickname</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="w-[10%]">Date Applied</TableHead>
            <TableHead className="w-[5%]">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applicants.map((applicant) => (
            <TableRow key={applicant._id} className="hover:bg-muted/50 transition-colors">
              <TableCell>{applicant.nickname}</TableCell>
              <TableCell>{applicant.email}</TableCell>
              <TableCell>{applicant.membership.createdAt ? formatDateToString(applicant.membership.createdAt) : ""}</TableCell>
              <TableCell>
                <UserActionBtn applicant={applicant} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}