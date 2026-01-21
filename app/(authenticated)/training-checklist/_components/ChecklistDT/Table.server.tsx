import { fetchTrainingChecklist } from "@/app/(authenticated)/_data/trainingChecklist"
import { ChecklistTableClient } from "./Table.client"

export async function ChecklistServerDT({
    applicantId,
    isAdmin,
    approvedBy,
}: {
    applicantId: string
    isAdmin: boolean
    approvedBy: string
}) {
    const checklist = await fetchTrainingChecklist(applicantId)

    return (
        <ChecklistTableClient
            initialData={checklist}
            applicantId={applicantId}
            isAdmin={isAdmin}
            approvedBy={approvedBy}
        />
    )
}
