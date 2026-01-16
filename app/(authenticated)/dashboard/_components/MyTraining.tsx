import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HandFist } from "lucide-react";
import Link from "next/link";

export default async function MyTraining({userId}:{userId:string}) {

    return (
        <Card className="gap-3">
            <CardHeader>
                <CardTitle >
                    <div className="flex items-center gap-1">
                        <HandFist className="h-4 w-4" />
                        <CardTitle>My Training</CardTitle>
                    </div>
                </CardTitle>
            </CardHeader>

            <CardContent>
                <div className="flex gap-3 items-end">
                    <p className="text-4xl font-bold text-muted-foreground">
                        50%
                    </p>
                    <p className="text-lg text-muted-foreground">
                        Completed
                    </p>
                </div>

                <div className="flex flex-col gap-2 mt-7">
                    <Button variant={"outline"} asChild>
                        <Link href={`/training-checklist/${userId}`}>
                            Training Checklist
                        </Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
