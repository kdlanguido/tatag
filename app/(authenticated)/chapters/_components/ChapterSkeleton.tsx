
export default function ChapterSkeleton() {
    return (
        <div className="flex flex-1 flex-col gap-4 p-4 animate-pulse">
            <div className="w-full">
                <div className="mb-5 flex justify-between">
                    <div className="flex gap-3">
                        <div className="h-10 w-24 bg-gray-200 rounded" />
                    </div>
                    <div className="h-10 w-20 bg-gray-200 rounded" />
                </div>

                <div className="flex items-center w-full justify-center">
                    <div className="h-[150px] w-[150px] bg-gray-200 rounded-full" />
                </div>
            </div>
        </div>
    )
}
