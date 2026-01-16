import Link from "next/link"
import { Suspense } from "react"
import { fetchBatchByChapterId } from '@/app/(admin)/admin/_data/batch'
import { checkIfUserIsChapterAdmin, fetchChapterById } from "@/actions/chapter"
import { smackLaidethDown } from "@/app/fonts"
import { Button } from "@/components/ui/button"
import { Edit, Plus, Undo2, UserCog } from "lucide-react"
import ChapterSkeleton from "../_components/ChapterSkeleton"
import ChapterEditLogoBtn from "../_components/ChapterEditLogoBtn"
import ChapterInfoTable from "../_components/ChapterInfoTable"
import { ChapterOfficials } from "../_components/ChapterOfficials"
import { DataTable } from "../_components/DataTable/Batch/Data-Table"
import { columns } from "../_components/DataTable/Batch/Columns"
import ChapterLocation from "../_components/ChapterLocation"
import { redirect } from "next/navigation"

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>
}) {

    const { id } = await params
    const chapterInfo = await fetchChapterById(id)
    const batches = await fetchBatchByChapterId(id)
    const isAdmin = await checkIfUserIsChapterAdmin(id)

    if(!chapterInfo){
        redirect("/admin/chapters")
    }

    return (
        <Suspense fallback={<ChapterSkeleton />}>
            <div className='flex flex-1 flex-col gap-4 p-4'>
                <div className="w-full">
                    <div className="mb-5 flex justify-end gap-2 md:justify-between">
                        <div className="flex gap-3">
                            <Link href={"/admin/chapters"}>
                                <Button variant={"outline"}>
                                    <Undo2 />
                                    <p className='hidden md:block'>
                                        Back
                                    </p>
                                </Button>
                            </Link>
                        </div>

                        {
                            isAdmin &&
                            <Link href={`/admin/chapters/edit/${id}`}>
                                <Button>
                                    <p className='hidden md:block'>
                                        Edit
                                    </p>
                                    <Edit />
                                </Button>
                            </Link>
                        }

                    </div>

                    <div className="flex items-center w-full flex-col gap-8">

                        <ChapterEditLogoBtn chapterInfo={chapterInfo} isAdmin={isAdmin} />

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
                                {
                                    isAdmin &&
                                    <Link href={"/admin/batch/create/" + id}>
                                        <Button size={"sm"} className="text-xs mb-1">
                                            <p className='hidden md:block text-xs'>
                                                Manage
                                            </p>
                                            <UserCog />
                                        </Button>
                                    </Link>
                                }
                            </div>
                            <ChapterOfficials />
                        </div>

                        <div className="w-full">
                            <div className="flex justify-between items-end">
                                <h3 className="scroll-m-20 pb-2 text-sm md:text-md font-semibold tracking-tight first:mt-0 mb-1">
                                    Batch List
                                </h3>

                                {
                                    isAdmin &&
                                    <Link href={"/admin/batch/create/" + id}>
                                        <Button size={"sm"} className="text-xs mb-1">
                                            <p className='hidden md:block text-xs'>
                                                Add
                                            </p>
                                            <Plus />
                                        </Button>
                                    </Link>
                                }

                            </div>
                            <DataTable columns={columns} data={batches} />
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