import { fetchMembershipUpdateRequests } from "@/actions/user"
import { columns } from "@/components/members/Membership/Approvals/Columns"
import { DataTable } from "@/components/members/Membership/Approvals/Data-Table"
import { Suspense } from "react"

export default async function Page() {

    const Requests = await fetchMembershipUpdateRequests()

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="flex flex-1 flex-col gap-4 p-4 w-full">
                <div className="mb-5">
                    <h1 className="font-semibold">Transfer Request Logs</h1>
                    <h1 className=" text-sm text-muted-foreground">View your membership transfer request logs</h1>
                </div>
                <DataTable columns={columns} data={Requests} />
            </div>
        </Suspense>
    )
}
