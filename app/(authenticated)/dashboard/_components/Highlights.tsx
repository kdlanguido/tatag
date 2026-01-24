import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Trophy } from "lucide-react"
import { Suspense } from "react"
// import { getHighlights } from "../_lib/highlights"

// async function HighlightsList() {
//     // This is the "Cache" part - the data fetching is scoped here
//     // const highlights = await getHighlights()

//     if (!highlights || highlights.length === 0) {
//         return <p className="text-sm text-muted-foreground">No highlights yet.</p>
//     }

//     return (
//         <div className="flex flex-col gap-2">
//             {highlights.map((item) => (
//                 <div key={item.id} className="text-sm border-b pb-2 last:border-0">
//                     {item.title}
//                 </div>
//             ))}
//         </div>
//     )
// }

// Loading Skeleton
function HighlightsSkeleton() {
    return (
        <div className="space-y-2 animate-pulse">
            <div className="h-4 bg-muted rounded w-3/4"></div>
            <div className="h-4 bg-muted rounded w-1/2"></div>
        </div>
    )
}

export default function HighlightsContainer() {
    return (
        <Card className="gap-3">
            <CardHeader>
                <CardTitle className="flex items-center justify-between">
                    <span className="capitalize flex gap-1 items-center">
                        <Trophy className="h-4 w-4" /> Highlights
                    </span>
                </CardTitle>
            </CardHeader>

            <CardContent>
                {/* Suspense allows the rest of the page to render while this fetches */}
                <Suspense fallback={<HighlightsSkeleton />}>
                   <p className="text-sm text-muted-foreground">No highlights yet.</p>
                </Suspense>
            </CardContent>
        </Card>
    )
}