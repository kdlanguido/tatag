"use client";

import { authClient } from "@/lib/auth-client";
import { Loader2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import Image from "next/image";

export default function LoginForm() {

    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        setLoading(true);
        try {
            await authClient.signIn.social({
                provider: "google",
                callbackURL: "/dashboard",
                errorCallbackURL: "/error",
            });
        } catch {
            toast.error("Something went wrong", {
                description: "Please try again later.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="grid w-full max-w-sm gap-2 mx-auto mt-10 p-5">
            <Image src="/assets/logo.png" height={"120"} width={"120"} alt="data" className="w-auto mx-auto mb-5" />

            <div className="mb-3">
                <Label className="text-lg font-semibold">Welcome back!</Label>
                <p className="text-sm text-muted-foreground">Login to continue</p>
            </div>

            <Button
                className="cursor-pointer"
                onClick={handleLogin}
                disabled={loading}
            >
                {loading ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Logging in...
                    </>
                ) : (
                    <>
                        <Image src={"/google.svg"} height={20} width={20} alt="         " />
                        Login using Google
                    </>
                )}
            </Button>
        </div>
    );
}
