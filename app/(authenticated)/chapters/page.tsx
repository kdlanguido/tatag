import { fetchChapters } from '@/actions/chapter'
import ChapterCard from '@/components/chapters/ChapterCard';

export default function Page() {
    return (
        <div className='flex flex-1 flex-col gap-4 p-4'>
            <div className="w-full">
                <div className="mb-5 flex flex-col">
                    <h1 className="font-semibold text-xl">Chapters List</h1>
                    <p className="text-sm text-muted-foreground">View Titan Arms Chapters</p>
                </div>
                <ChapterList />
            </div>
        </div>
    );
}

async function ChapterList() {
    const chapters = await fetchChapters();
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {chapters.map((data, index) => (
                <ChapterCard chapter={data} key={data._id || index} />
            ))}
        </div>
    );
}