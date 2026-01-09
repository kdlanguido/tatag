import { Suspense } from 'react'
import { fetchChapters } from '@/actions/chapter'
import ChapterCard from '@/components/chapters/ChapterCard';

export default async function Page() {

    const chapters = await fetchChapters()

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className='flex flex-1 flex-col gap-4 p-4'>
                <div className="w-full">
                    <div className="mb-5 flex justify-between">
                        <div className="flex flex-col">
                            <h1 className="font-semibold">Chapters List</h1>
                            <h1 className=" text-sm text-muted-foreground">View Titan Arms Chapters</h1>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                        {
                            chapters.map((data, index) =>
                                <ChapterCard chapter={data} key={index} />
                            )
                        }
                    </div>
                </div>
            </div>
        </Suspense>
    )
}
