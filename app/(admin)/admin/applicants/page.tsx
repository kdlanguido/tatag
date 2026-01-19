import SearchInput from "@/components/general/SearchInput";
import { fetchChapterApplicants } from "../_data/chapter";
import { fetchProfile } from "../_data/user";
import ApplicantTable from "./_components/ApplicantTable/Table";

interface PageProps {
    searchParams: Promise<{ query?: string }>
}

export default async function page({ searchParams }: PageProps) {

    const { query } = await searchParams;

    const { membership } = await fetchProfile();

    if (!membership) {
        return null;
    }

    const data = await fetchChapterApplicants(membership.chapterId?.toString());

    const users = data.filter(user =>
        !query || user.nickname.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="w-full flex flex-col gap-4 p-4">
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <h1 className="font-semibold text-xl">Applicant List</h1>
                    <p className="text-sm text-muted-foreground">Chapter applicants list</p>
                </div>
                <SearchInput />
            </div>
            <ApplicantTable applicants={users} />
        </div>
    );
}
