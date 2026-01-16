import { fetchApplicationInformation, fetchProfile } from '@/actions/user'
import { fetchBatchByChapterId } from '@/app/(authenticated)/_data/batch'
import ApplicationForm from '@/components/admins/Applications/Forms/ApplicationForm'
import { Button } from '@/components/ui/button'
import { Undo2 } from 'lucide-react'
import Link from 'next/link'
import { Suspense } from 'react'

export default async function page({ params }: { params: Promise<{ id: string }> }) {

    const { id } = await params
    const applicationInfo = await fetchApplicationInformation(id)
    const batches = await fetchBatchByChapterId(applicationInfo.membership.chapterId)
    const profileData = await fetchProfile()

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="p-4 w-full flex-col gap-4  ">

                <div className='flex justify-between w-full md:w-1/2'>
                    <div className="mb-5 flex flex-col">
                        <h1 className="font-semibold">Applicant Information</h1>
                        <h1 className=" text-sm text-muted-foreground">View applicant information for your approval.</h1>
                    </div>

                    <Link href={"/admin/dashboard"}>
                        <Button variant={"outline"} type='button'>
                            <Undo2 />
                            <p className='hidden md:block'>
                                Back
                            </p>
                        </Button>
                    </Link>

                </div>
                <ApplicationForm applicationInformation={applicationInfo} batches={batches} adminId={profileData._id ?? ""} />
            </div>
        </Suspense>
    )
}
