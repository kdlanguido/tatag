import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";
import Feed from "../../../../components/members/Dashboard/MembersFeed/Feed";

export default function MembersFeed() {
    return (
        <Card className="w-full h-full">
            <CardHeader className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <CardTitle>Members Feed</CardTitle>
                </div>
            </CardHeader>

            <CardContent className="space-y-1 text-sm">
                <div className="text-muted-foreground">
                    This feature is currently under development.
                </div>

                {/* <div className="flex flex-col gap-7 md:gap-1">
                    <Feed />
                    <Feed />
                    <Feed />
                </div> */}
            </CardContent>
        </Card>
    )
}
