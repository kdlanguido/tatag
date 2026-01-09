import { fetchActiveMembers, fetchMembershipUpdateRequests } from "@/actions/user"
import { columns } from "@/components/members/Active/Columns"
import { DataTable } from "@/components/members/Active/Data-Table"
import { Suspense } from "react"

export default async function Page() {

    const Requests = await fetchActiveMembers()

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="flex flex-1 flex-col gap-4 p-4 w-full">
                <div className="mb-5">
                    <h1 className="font-semibold">Active Members</h1>
                    <h1 className=" text-sm text-muted-foreground">View All Active Members</h1>
                </div>
                <DataTable columns={columns} data={Requests} />
            </div>
        </Suspense>
    )
}
