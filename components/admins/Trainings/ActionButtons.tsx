"use client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ArrowDown10, ArrowUp01, Edit, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";
import { moveTraining } from "@/actions/training";
import { toast } from "sonner";

export function ActionButtons({ trainingId }: { trainingId: string }) {

    const router = useRouter();

    const handleMoveUp = async () => {
        const res = await moveTraining(trainingId, 'up')

        if (!res?.success) {
            console.log(res?.message)
        } else {
            toast.success("Training moved up successfully")
            router.refresh()
        }
    }

    const handleMoveDown = async () => {
        const res = await moveTraining(trainingId, 'down')

        if (!res?.success) {
            console.log(res?.message)
        } else {
            toast.success("Training moved down successfully")
            router.refresh()
        }
    }

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
                        <DropdownMenuLabel>Admin Options</DropdownMenuLabel>
                        <DropdownMenuItem onSelect={() => router.push(`/admin/trainings/edit/${trainingId}`)} >
                            <Edit /> Update Training
                        </DropdownMenuItem>

                        <DropdownMenuSeparator />
                        <DropdownMenuLabel>Sort Options</DropdownMenuLabel>
                        <DropdownMenuItem onSelect={handleMoveUp} >
                            <ArrowUp01 /> Move Up
                        </DropdownMenuItem>
                        <DropdownMenuItem onSelect={handleMoveDown} >
                            <ArrowDown10 /> Move Down
                        </DropdownMenuItem>
                    </>

                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}


