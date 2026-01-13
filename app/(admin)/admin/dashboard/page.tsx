import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation";
import { checkIfUserIsAdmin } from "@/actions/user";
import { Suspense } from "react";
import ApplicantTabs from "@/components/admins/Dashboard/ApplicantTabs";

export default async function Page() {

    const session = await auth.api.getSession({ headers: await headers() })

    if (!session) {
        redirect("/login")
    }

    const userIsAdmin = await checkIfUserIsAdmin()
    if (!userIsAdmin) {
        await auth.api.signOut({ headers: await headers() });
        redirect("/dashboard")
    }

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className='flex flex-1 flex-col gap-8 p-4'>
                <div className="w-full">
                    <div className="mb-5 flex justify-between">
                        <div className="flex flex-col">
                            <h1 className="font-semibold">Chapter Applicants</h1>
                            <h1 className=" text-sm text-muted-foreground">Monitor your chapter applicants.</h1>
                        </div>
                    </div>
                    <ApplicantTabs />
                </div>

                <div className="w-full">
                    <div className="mb-5 flex justify-between">
                        <div className="flex flex-col">
                            <h1 className="font-semibold">Chapter Events</h1>
                            <h1 className=" text-sm text-muted-foreground">Manage your chapter events.</h1>
                        </div>
                    </div>
                    <ApplicantTabs />
                </div>
            </div>
        </Suspense>

        // <div className="flex flex-1 flex-col gap-4 p-2 md:p-4">
        //     <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        // <ApplicantsCard />
        //     </div>

        //     <div className="bg-muted/50 flex-1 rounded-xl">
        //     </div>
        // </div>

    )
}