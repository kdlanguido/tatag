"use client"

import { ChapterI } from '@/model/Chapter.model'
import Image from 'next/image'
import { ChapterEditLogoUploader } from './ChapterEditLogoUploader'

export default function ChapterEditLogoBtn({ chapterInfo, isAdmin }: { chapterInfo: ChapterI, isAdmin: boolean }) {

    return (
        <div className="relative w-[300px] h-[300px] md:w-[300px] md:h-[300px] border rounded p-5">
            <Image
                src={chapterInfo.logo}
                alt="Chapter Logo"
                height={200}
                width={200}
                className="object-contain w-auto"
                placeholder="blur"
                blurDataURL="/assets/logo.png"
            />
            {
                isAdmin &&
                <ChapterEditLogoUploader logoFileKey={chapterInfo.logoFileKey} chapterId={chapterInfo._id ? chapterInfo._id : ""} />
            }
        </div>
    )
}
