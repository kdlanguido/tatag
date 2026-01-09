"use client"

import { use, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChapterI } from "@/model/Chapter.model";
import { UserI } from "@/model/User.model";
import ChapterCard from "./ChapterCard";
import { Plus } from "lucide-react";

export default function ChapterList({
    chapters,
    profileData
}: {
    chapters: Promise<ChapterI[]>,
    profileData: Promise<UserI>
}) {

    const chapterList = use(chapters)
    const profile = use(profileData)

    useEffect(() => {

    }, [])

    return (
        <div className='flex flex-1 flex-col gap-4 p-4'>
            <div className="w-full">
                <div className="mb-5 flex justify-between">
                    <div className="flex flex-col">
                        <h1 className="font-semibold">Chapters List</h1>
                        <h1 className=" text-sm text-muted-foreground">Manage Titan Arms Chapters</h1>
                    </div>
                    <Button>
                        Create
                        <Plus />
                    </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                    {
                        chapterList.map((data, index) =>
                            <ChapterCard chapter={data} key={index} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}
