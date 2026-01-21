import { Suspense } from "react";
import SearchInput from "@/components/general/SearchInput";
import { fetchChapterApplicants } from "../_data/chapter";
import { fetchProfile } from "../_data/user";
import ApplicantTable from "./_components/ApplicantTable/Table";
import TableSkeleton from "./_components/ApplicantTable/Skeleton";

interface PageProps {
    searchParams: Promise<{ query?: string }>
}

// ISR
export const revalidate = 10;

export default async function Page({ searchParams }: PageProps) {
    const { query } = await searchParams;

    return (
        <div className="w-full flex flex-col gap-4 p-4">
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <h1 className="font-semibold text-xl">Applicant List</h1>
                    <p className="text-sm text-muted-foreground">Chapter applicants list</p>
                </div>
                <SearchInput />
            </div>
           
            <Suspense key={query} fallback={<TableSkeleton />}>
                <ApplicantListContent query={query} />
            </Suspense>
        </div>
    );
}

async function ApplicantListContent({ query }: { query?: string }) {
    const { membership } = await fetchProfile();
    if (!membership) return <div>Access Denied</div>;

    const data = await fetchChapterApplicants(membership.chapterId?.toString());

    const filteredApplicants = data.filter(user =>
        !query || user.nickname.toLowerCase().includes(query.toLowerCase())
    );

    return <ApplicantTable applicants={filteredApplicants} />;
}