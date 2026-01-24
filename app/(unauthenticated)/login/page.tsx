"use client";

import { authClient } from "@/lib/auth-client";
import { Loader2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import Image from "next/image";
import { LogoSwapper } from "../_components/LogoSwapper";

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
        <div className="min-h-screen">
            <div className="flex flex-col w-full max-w-sm gap-2 mx-auto mt-10 p-5 ">
                <LogoSwapper
                    images={[
                        "/assets/logo.png",
                        "/assets/este.png",
                        "/assets/katuparan.png",
                        "/assets/morning.png",
                    ]}
                    interval={5000}
                    className="h-[200px] w-[200px] self-center mt-20 md:mt-0"
                />
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
        </div>
    );
}
