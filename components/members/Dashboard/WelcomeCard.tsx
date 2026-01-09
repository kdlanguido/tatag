import { getBadge } from "@/components/helper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function WelcomeCard() {

    return (
        <Card className="gap-3">
            <CardHeader>
                <CardTitle className="flex items-center justify-between">
                    {/* {loading ? (
                            <>
                                <Skeleton className="h-5 w-40 rounded-md" />
                                <Skeleton className="h-5 w-20 rounded-md" />
                            </>
                        ) : user ? ( */}
                    <>
                        <span className="capitalize">🖐 Welcome, {"Member"}</span>
                        {getBadge("new")}
                    </>
                    {/* ) : (
                            <Skeleton className="h-5 w-40 rounded-md" />
                        )} */}
                </CardTitle>
            </CardHeader>

            <CardContent>
                {/* {loading ? (
                        <div className="space-y-3">
                            <Skeleton className="h-4 w-3/4 rounded-md" />
                            <div className="flex gap-6 mt-4">
                                <Skeleton className="h-12 w-1/2 rounded-md" />
                                <Skeleton className="h-12 w-1/2 rounded-md" />
                            </div>
                        </div>
                    ) : user ? (
                        user.memberStatus === "applicant" ? ( */}
                <>
                    <p className="text-sm text-muted-foreground p-0 md:px-2">
                        Continue your training! Here&apos;s your training summary.
                    </p>
                    <div className="mt-4 flex items-center gap-6">
                        <Button
                            className="flex-1 justify-start hover:bg-gray-100 p-0 md:p-2 rounded cursor-pointer text-start "
                            variant="ghost"
                        >
                            <div>
                                <div className="text-xs text-muted-foreground">View Pending Training</div>
                                <div className="text-lg font-semibold">{ }</div>
                            </div>
                        </Button>
                        <Button
                            className="flex-1 justify-start hover:bg-gray-100 p-0 md:p-2 rounded cursor-pointer text-start"
                            variant="ghost"
                        >
                            <div>
                                <div className="text-xs text-muted-foreground">Completed</div>
                                <div className="text-lg font-semibold">{ }</div>
                            </div>
                        </Button>
                    </div>
                </>
                {/* ) : (
                            <p className="text-sm text-muted-foreground p-0 md:px-2">
                                Hello {user.nickName}! Don&apos;t forget to visit our HQ and train with our brothers!
                            </p>
                        )
                    ) : (
                        <Skeleton className="h-6 w-full rounded-md" />
                    )} */}
            </CardContent>
        </Card>
    )
}
