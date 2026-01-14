
'use client'

import { useActionState, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { registerUser } from "@/actions/user"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { authClient } from "@/lib/auth-client"

export default function Page() {

    const router = useRouter();

    const [state, action, pending] = useActionState(registerUser, {
        emailErrorMsg: "",
        nicknameErrorMsg: "",
        success: false,
    })

    const defaultMsg = "Every member started as an applicant"
    const [temporaryMessage, setTemporaryMessage] = useState(defaultMsg)
    const [temporaryEmail, setTemporaryEmail] = useState("")
    const { data: session } = authClient.useSession()

    useEffect(() => {

        if (state.success) {
            toast.success("Welcome to Titan Arms Brotherhood!", {
                description: "",
            })
            router.push("/welcome-applicant")
        }

        const executeActiveSessionCheck = async () => {
            if (session) {
                setTemporaryMessage("Your email is not yet associated with any account, Please register to continue.")
                setTemporaryEmail(session.user.email)
                authClient.signOut()
            }
        }

        executeActiveSessionCheck()

    }, [state.success, session])

    return (
        <Card className="w-full max-w-sm mx-auto mt-20 border border-muted shadow-sm">
            <CardHeader className="text-center gap-1">
                <CardTitle className="text-2xl font-bold">Register Applicant</CardTitle>
                <CardDescription>
                    {session ? "Syncing account..." : temporaryMessage}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form action={action} className="space-y-6">
                    <div className="space-y-4">

                        <div className="space-y-1.5">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                required
                                className={state.emailErrorMsg ? "border-red-500 focus-visible:ring-red-500" : ""}
                                placeholder="Please enter a valid email"
                                defaultValue={temporaryEmail || ""}
                            />
                            {state.emailErrorMsg && (
                                <p className="text-sm text-red-600">{state.emailErrorMsg}</p>
                            )}
                        </div>

                        <div className="space-y-1.5">
                            <Label htmlFor="nickname">Nickname</Label>
                            <Input
                                id="nickname"
                                name="nickname"
                                required
                                className={state.nicknameErrorMsg ? "border-red-500 focus-visible:ring-red-500" : ""}
                                placeholder="This will be your official nickname"
                            />
                            {state.nicknameErrorMsg && (
                                <p className="text-sm text-red-600">{state.nicknameErrorMsg}</p>
                            )}
                        </div>

                    </div>

                    <Button
                        type="submit"
                        disabled={pending}
                        className="w-full"
                    >
                        {pending ? (
                            <div className="flex items-center gap-2">
                                <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></span>
                                Registering...
                            </div>
                        ) : (
                            "Register"
                        )}
                    </Button>
                </form>

            </CardContent>
        </Card>
    )
}
