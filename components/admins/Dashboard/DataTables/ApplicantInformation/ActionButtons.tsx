"use client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Eye, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button"
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";

export function ActionButtons({ applicant }: { applicant: UserIUI }) {
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <>
                        <DropdownMenuSeparator />
                        <DropdownMenuLabel>Options</DropdownMenuLabel>
                        <DropdownMenuItem onSelect={() => { }} asChild>
                            <Link href={`/admin/application/${applicant._id}`} className="flex items-center gap-1">
                                <Eye /> View Application
                            </Link>
                        </DropdownMenuItem>
                    </>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}
