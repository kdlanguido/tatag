import Link from "next/link"
import { Suspense } from "react"
import { fetchChapterApplicants, fetchChapterById, fetchChapterMembers } from "@/actions/chapter"
import { smackLaidethDown } from "@/app/fonts"
import ChapterInfoTable from "@/components/admins/Chapters/ChapterInfoTable"
import ChapterLocation from "@/components/admins/Chapters/ChapterLocation"
import { ChapterOfficials } from "@/components/admins/Chapters/ChapterOfficials"
import ChapterSkeleton from "@/components/admins/Chapters/ChapterSkeleton"
import { Button } from "@/components/ui/button"
import { Undo2 } from "lucide-react"
import Image from "next/image"
import { MembersDataTable } from "@/components/chapters/MembersDataTable/Data-Table"
import { columns } from "@/components/chapters/MembersDataTable/Columns"
import { ApplicantsDataTable } from "@/components/chapters/ApplicantsDataTable/Data-Table"
import { applicantColumns } from "@/components/chapters/ApplicantsDataTable/Columns"
import ChapterImage from "@/components/chapters/ChapterImage"

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>
}) {

    const { id } = await params
    const chapterInfo = await fetchChapterById(id)
    const chapterMembers = await fetchChapterMembers(id)
    const chapterApplicants = await fetchChapterApplicants(id)

    return (
        <Suspense fallback={<ChapterSkeleton />}>
            <div className='flex flex-1 flex-col gap-4 p-4'>
                <div className="w-full">
                    <div className="mb-5 flex justify-end gap-2 md:justify-between">
                        <div className="flex gap-3">
                            <Link href={"/chapters"}>
                                <Button variant={"outline"}>
                                    <Undo2 />
                                    <p className='hidden md:block'>
                                        Back
                                    </p>
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="flex items-center w-full flex-col gap-8">
                        <div className="relative w-[300px] h-[300px] md:w-[300px] md:h-[300px] p-5">
                         <ChapterImage imageUrl={chapterInfo.logo} />
                        </div>

                        <div className="flex flex-col  items-center mb-10">
                            <h1 className={`${smackLaidethDown.className} text-lg md:text-4xl text-center`}>
                                {chapterInfo.name}
                            </h1>
                            <h1 className=" italic text-sm md:text-lg">
                                {chapterInfo.slogan}
                            </h1>
                        </div>

                        <div className="w-full">
                            <h3 className="scroll-m-20 pb-2 text-sm md:text-md font-semibold tracking-tight first:mt-0">
                                Chapter Information
                            </h3>
                            <ChapterInfoTable chapterInfo={chapterInfo} />
                        </div>

                        <div className="w-full">
                            <div className="flex justify-between items-end">
                                <h3 className="scroll-m-20 pb-2 text-sm md:text-md font-semibold tracking-tight first:mt-0 mb-1">
                                    Chapter Officials
                                </h3>
                            </div>
                            <ChapterOfficials />
                        </div>

                        <div className="w-full">
                            <div className="flex justify-between items-end">
                                <h3 className="scroll-m-20 pb-2 text-sm md:text-md font-semibold tracking-tight first:mt-0 mb-1">
                                    Chapter Members
                                </h3>
                            </div>
                            <MembersDataTable columns={columns} data={chapterMembers} />
                        </div>

                        <div className="w-full">
                            <div className="flex justify-between items-end">
                                <h3 className="scroll-m-20 pb-2 text-sm md:text-md font-semibold tracking-tight first:mt-0 mb-1">
                                    Chapter Applicants
                                </h3>
                            </div>
                            <ApplicantsDataTable columns={applicantColumns} data={chapterApplicants} />
                        </div>

                        {chapterInfo?.hqAddress &&
                            <div className="w-full">
                                <h3 className="scroll-m-20 pb-2 text-sm md:text-md font-semibold tracking-tight first:mt-0 mb-1">
                                    Headquarters
                                </h3>
                                <ChapterLocation hqAddress={chapterInfo?.hqAddress} />
                            </div>
                        }

                    </div>

                </div>
            </div>
        </Suspense>
    )
}