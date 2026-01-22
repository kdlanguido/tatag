import { fetchMembershipUpdateRequests } from "@/actions/admin"
import { cachedCurrentUserProfile } from "@/app/(authenticated)/_data/user"
import { columns } from "@/components/admins/Membership/Approvals/Columns"
import { DataTable } from "@/components/admins/Membership/Approvals/Data-Table"
import { Suspense } from "react"

export default async function Page() {

    const profile = await cachedCurrentUserProfile();
    const Requests = await fetchMembershipUpdateRequests(profile.membership.chapterId.toString())

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="flex flex-1 flex-col gap-4 p-4 w-full">
                <div className="mb-5">
                    <h1 className="font-semibold">Membership Requests</h1>
                    <h1 className=" text-sm text-muted-foreground">Manage members requests</h1>
                </div>
                <DataTable columns={columns} data={Requests} />
            </div>
        </Suspense>
    )
}
