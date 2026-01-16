import { Suspense } from 'react'
import { fetchChapters } from '@/actions/chapter'
import { fetchProfile } from '@/actions/user'
import ChapterCard from './_components/ChapterCard'

export default async function Page() {

    const chapters = await fetchChapters()
    const profileData = await fetchProfile()

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className='flex flex-1 flex-col gap-4 p-4'>
                <div className="w-full">
                    <div className="mb-5 flex justify-between">
                        <div className="flex flex-col">
                            <h1 className="font-semibold">Chapters List</h1>
                            <h1 className=" text-sm text-muted-foreground">Manage Titan Arms Chapters</h1>
                        </div>
                        
                        {/* <Link href="/admin/chapters/create">
                            <Button>
                                <p className='hidden md:block'>
                                    Create
                                </p>
                                <Plus />
                            </Button>
                        </Link> */}

                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                        {
                            chapters.map((data, index) =>
                                <ChapterCard chapter={data} key={index} profile={profileData} />
                            )
                        }
                    </div>
                </div>
            </div>
        </Suspense>
    )
}
