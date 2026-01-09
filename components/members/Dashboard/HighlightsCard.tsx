import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Trophy, UserPen } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HighlightsCard() {
    return (

        <Card className="gap-3">
            <CardHeader>
                <CardTitle className="flex items-center justify-between">
                    <span className="capitalize flex gap-1">
                        <Trophy className="h-4" /> Highlights
                    </span>
                </CardTitle>
            </CardHeader>

            <CardContent>
                <div className="flex flex-col">
                    <p className="text-sm font-semibold mb-2">
                        Titan Arms Taguig: Rise of the Strongest
                    </p>
                    <p className="text-xs text-justify text-muted-foreground mb-5">
                        An epic clash of strength, brotherhood, and honor. Step forward and compete for the ultimate title — who will rise as the strongest Titan?
                    </p>
                    <Button variant="outline" className="cursor-pointer font-normal text-[12px] !py-1 w-[120px] ms-auto">
                        <UserPen />Register
                    </Button>
                </div>
            </CardContent>
        </Card>

    )
}
