"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useChapterStore } from "@/store/chapter.store"
import { Camera } from "lucide-react"
import { Input } from "@/components/ui/input"
import { updateChapter, updateChapterLogo } from "@/actions/chapter"
import { useActionState, useEffect } from "react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export function ChapterEditLogoUploader({ chapterId, logoFileKey }: { chapterId: string, logoFileKey: string }) {

    const router = useRouter();

    const { chapterLogoEditIsOpen, toggleChapterLogoEditIsOpen } = useChapterStore();

    const [state, action, pending] = useActionState(updateChapterLogo, {
        success: null
    })

    const handleEditLogoClicked = async () => {
        toggleChapterLogoEditIsOpen()
    }

    useEffect(() => {

        if (state.success === null) return

        if (state.success) {
            toast.success("Notification", {
                description: "Chapter logo has been updated successfully.",
            })
            router.refresh()
        } else {
            toast.success("Notification", {
                description: "Chapter update failed, please contact administrators.",
            })
        }

        toggleChapterLogoEditIsOpen()

    }, [state])

    return (
        <Dialog open={chapterLogoEditIsOpen}>
            <DialogTrigger asChild>
                <Button
                    className="absolute top-1 right-1 bg-transparent p-2 hover:bg-gray-100 transition text-black-500"
                    onClick={handleEditLogoClicked}
                >
                    <Camera className="w-24 h-24" />
                </Button>
            </DialogTrigger>

            <DialogContent className=" max-w-lg [&>button]:hidden">
                <form action={action}>
                    <Input hidden defaultValue={chapterId} name="_id" />
                    <Input hidden defaultValue={logoFileKey} name="logoFileKey" />
                    <DialogHeader className="gap-2 mb-5">
                        <DialogTitle>Edit Chapter Logo</DialogTitle>
                        <DialogDescription>
                            Upload a logo not exceeding 5MB.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col gap-4">
                        <Input type="file" name="logo" />
                        <div className="gap-1 flex justify-end">
                            <Button type="button" onClick={() => toggleChapterLogoEditIsOpen()} variant={"outline"}>Cancel</Button>
                            <Button type="submit" disabled={pending}>Submit</Button>
                        </div>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}
