"use client";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dumbbell, LogOut, User, UserStar } from "lucide-react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export function Header() {

    const router = useRouter();

    const handleLogout = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/login"); // redirect to login page
                },
            },
        });
    };

    return (
        <header className="bg-black flex items-center justify-between border-b bg-background px-6 py-3">
            <div className="flex items-center gap-2">
                <h1 className="text-md font-semibold tracking-tight text-yellow-400 ">Titan Arms Brotherhood Portal</h1>
            </div>

            <div className="flex items-center gap-3 ">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="relative h-9 w-9 rounded-full cursor-pointer">
                            <Avatar className="h-9 w-9">
                                {/* <AvatarImage
                                    src={user?.avatarUrl || ""}
                                    alt={user?.fullName || "User"}
                                />
                                <AvatarFallback>
                                    {user?.fullName
                                        ? user.fullName.charAt(0).toUpperCase()
                                        : "?"}
                                </AvatarFallback> */}

                                <AvatarImage
                                    src={"/assets/logo.png"}
                                    alt={"User"}
                                />
                                <AvatarFallback>
                                    K
                                </AvatarFallback>
                            </Avatar>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {/* <DropdownMenuLabel className="capitalize">
                            {user ? user.fullName : "Guest"}
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="cursor-pointer hover:bg-gray-100" onClick={handleClickProfile}>
                            <User className="mr-2 h-4 w-4" />
                            Profile
                        </DropdownMenuItem>

                        {user?.isAdmin && (
                            <DropdownMenuItem className="cursor-pointer hover:bg-gray-100" onClick={handleClickAdminZone}>
                                <UserStar className="mr-2 h-4 w-4" />
                                Admin Zone
                            </DropdownMenuItem>
                        )}

                        {user?.memberStatus == "applicant" && (
                            <DropdownMenuItem className="cursor-pointer hover:bg-gray-100" onClick={handleViewTraining}>
                                <Dumbbell className="mr-2 h-4 w-4" />
                                Training Sheet
                            </DropdownMenuItem>
                        )} */}

                        <DropdownMenuItem className="cursor-pointer hover:bg-gray-100" onClick={handleLogout}>
                            <LogOut className="mr-2 h-4 w-4" />
                            Logout
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
}
