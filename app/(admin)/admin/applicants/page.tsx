import { ApplicantsDataTable } from "@/components/chapters/ApplicantsDataTable/Data-Table";
import { applicantColumns } from "@/components/chapters/ApplicantsDataTable/Columns";
import { fetchChapterApplicants } from "../_data/chapter";
import { fetchProfile } from "../_data/user";

export default async function page() {
    
    const {membership} = await fetchProfile();

    if(!membership){
        return null;
    }
    
    const data = await fetchChapterApplicants(membership.chapterId?.toString());

    return (
        <div className='flex flex-1 flex-col gap-4 p-4'>
            <div className="w-full">
                <div className="mb-5 flex flex-col">
                    <h1 className="font-semibold text-xl">Applicant List</h1>
                    <p className="text-sm text-muted-foreground">Chapter applicants list</p>
                </div>
                <ApplicantsDataTable columns={applicantColumns} data={data} />
            </div>
        </div>
    );
}
