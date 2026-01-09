import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";

export default function MembersFeed() {
    return (
        <Card className="w-full h-full">
            <CardHeader className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <CardTitle>Members Feed</CardTitle>
                </div>
            </CardHeader>

            <CardContent className="space-y-8 text-sm text-muted-foreground">
                <>
                    This feature is currently under development.
                </>
            </CardContent>
        </Card>
    )
}
