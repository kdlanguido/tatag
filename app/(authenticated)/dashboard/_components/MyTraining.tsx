import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HandFist } from "lucide-react";
import Link from "next/link";
import { fetchTrainingPercentageCompleted } from "../../_data/trainingChecklist";

export default async function MyTraining({ userId, isApplicant }: { userId: string, isApplicant: boolean }) {

    const percentageCompleted = await fetchTrainingPercentageCompleted(userId);

    return (
        <Card className="gap-3" hidden={!isApplicant}>
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
                    <p className={`text-4xl font-bold ${percentageCompleted === 100 ? "text-green-500" : "text-muted-foreground"}`}>
                        {percentageCompleted}%
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
