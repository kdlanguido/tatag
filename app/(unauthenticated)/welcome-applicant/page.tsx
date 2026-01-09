
import Image from "next/image";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
    return (
        <Card className="w-3/4 max-w-md shadow-xl rounded-2xl mx-auto mt-20">
            <CardHeader className="flex flex-col items-center gap-4 pt-8">
                <Image
                    src="/assets/logo.png"
                    alt="App Logo"
                    width={120}
                    height={120}
                    className="rounded-full w-auto"
                />
                <h1 className="text-3xl font-bold text-center">Welcome to Titan Arms Brotherhood!</h1>
            </CardHeader>
            <CardContent className="text-center pb-8 px-6">
                <p className="text-gray-600 text-lg">
                    Greetings!
                    Your account has been created, please check your email for further instructions.
                </p>
            </CardContent>
            <CardFooter>
                <Button className="mx-auto" asChild>
                    <Link href="/login" >
                        Go to Login
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
