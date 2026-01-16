import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { FilePenLine, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button"
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { BatchI } from "@/model/Batch.model";
import Link from "next/link";

export function ActionButtons({ batch }: { batch: BatchI }) {
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
                            <DropdownMenuLabel>Admin Options</DropdownMenuLabel>
                            <DropdownMenuItem asChild>
                                <Link href={`/admin/batch/edit/${batch._id}`} className="flex gap-2"> 
                                <FilePenLine /> Update Status
                                </Link>
                            </DropdownMenuItem>
                        </>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}
