"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { UnifrakturMaguntia } from "next/font/google";

export const headerFont = UnifrakturMaguntia({
    subsets: ["latin"],
    weight: "400"
})

interface NavLink {
    title: string;
    path: string;
}

interface MobileNavbarProps {
    navLinks: NavLink[];
}

export default function MobileNavbar({ navLinks }: MobileNavbarProps) {

    const [open, setOpen] = useState(false);

    const handleLinkClick = () => {
        setOpen(false);
    };

    return (
        <div className="flex lg:hidden justify-between items-center px-4 py-2 border-b">
            <h1 className={`${headerFont.className} text-xl font-semibold text-[#E4BD13]`}>
                Titan Arms Brotherhood
            </h1>

            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu className="h-6 w-6 text-[#E4BD13]" />
                    </Button>
                </SheetTrigger>

                <SheetContent side="right" className="w-64">
                    <SheetHeader>
                        <SheetTitle className="text-lg font-semibold">Menu</SheetTitle>
                    </SheetHeader>

                    <div className="flex flex-col gap-2 mt-4">
                        {navLinks.map((link, index) => (
                            <Button
                                asChild
                                key={index}
                                variant="ghost"
                                className="justify-start text-[#E4BD13] text-base font-normal"
                                onClick={handleLinkClick}
                            >
                                <Link href={link.path}>{link.title}</Link>
                            </Button>
                        ))}
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
}
