'use client'

import Image from "next/image";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion"; // Install via: npm install framer-motion

export default function Page() {
    return (
        <div className="min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex justify-center"
            >
                <Card className="w-3/4 max-w-md shadow-xl rounded-2xl  mt-30 border-none">
                    <CardHeader className="flex flex-col items-center gap-4 pt-8">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <Image
                                src="/assets/logo.png"
                                alt="App Logo"
                                width={120}
                                height={120}
                                className="rounded-full w-auto"
                                priority
                            />
                        </motion.div>
                        <h1 className="text-3xl font-bold text-center">
                            Welcome to Titan Arms Brotherhood!
                        </h1>
                    </CardHeader>

                    <CardContent className="text-center pb-8 px-6">
                        <p className="text-muted-foreground text-lg">
                            Greetings!
                            <br />
                            Your account has been created, kindly login using your email to setup your account.
                        </p>
                    </CardContent>

                    <CardFooter className="pb-8">
                        <Button className="mx-auto px-8 transition-all hover:scale-105" asChild>
                            <Link href="/login" >
                                Go to Login
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>
            </motion.div>
        </div>
    );
}