import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";
import { columns } from "./DataTables/Applicants/Columns";
import { fetchApplicantsByType } from "@/actions/chapter";
import { fetchProfile } from "@/actions/user";
import { redirect } from "next/navigation";
import { MembersDataTable } from "./DataTables/Applicants/Data-Table";

export default async function ApplicantsCard({ fetchIsNew }: { fetchIsNew: boolean }) {

    const adminProfile = await fetchProfile()

    if (adminProfile.membership.memberLevel !== 'admin') {
        redirect("/dashboard")
    }

    const data = fetchIsNew ?
        await fetchApplicantsByType(adminProfile?.membership?.chapterId.toString(), "new")
        :
        await fetchApplicantsByType(adminProfile?.membership?.chapterId.toString(), "active");

    return (
        <>
            <MembersDataTable columns={columns} data={data} />
        </>
    )
}
