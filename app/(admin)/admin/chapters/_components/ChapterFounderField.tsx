import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"
import { fetchAllMembers } from "@/actions/user"
import { UserI } from "@/model/User.model"
import { useChapterStore } from "@/store/chapter.store"
import { DataTable } from "./DataTable/User/Data-Table"
import { columns } from "./DataTable/User/Columns"

export function ChapterFounderField() {

    const [userList, setUserList] = useState<UserI[]>([])
    const { createChapterSelectedFounder, chapterFounderFieldIsOpen, toggleChapterFounderFieldIsOpen } = useChapterStore();

    useEffect(() => {
        const executeFetchActiveMembers = async () => {
            const res = await fetchAllMembers()
            setUserList(res)
        }
        executeFetchActiveMembers()
    }, [])

    return (
        <Dialog open={chapterFounderFieldIsOpen}>
            <DialogTrigger asChild>
                <Field>
                    <FieldLabel htmlFor="founder" >Founder</FieldLabel>
                    <Input
                        type="text"
                        className="capitalize"
                        defaultValue={createChapterSelectedFounder?.nickname}
                        onClick={() => toggleChapterFounderFieldIsOpen()}
                    />
                    <Input
                        name="founder"
                        type="text"
                        className="capitalize"
                        hidden
                        defaultValue={createChapterSelectedFounder?._id}
                    />
                </Field>
            </DialogTrigger>
            <DialogContent className=" max-w-lg [&>button]:hidden">
                <DialogHeader>
                    <DialogTitle>Active Members</DialogTitle>
                    <DialogDescription>
                        Select a founder
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                    <DataTable columns={columns} data={userList} />
                </div>

                <DialogFooter>
                    <Button variant="outline" onClick={() => toggleChapterFounderFieldIsOpen()}>Cancel</Button>
                </DialogFooter>

            </DialogContent>
        </Dialog>
    )
}
