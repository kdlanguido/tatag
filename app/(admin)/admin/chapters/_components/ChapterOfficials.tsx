import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export function ChapterOfficials() {
    return (
        <Carousel
            opts={{ align: "start" }}
            className=" w-full max-w-screen md:max-w-[79vw] mx-auto"
        >
            <CarouselContent className="flex gap-2">
                {Array.from({ length: 14 }).map((_, index) => (
                    <CarouselItem key={index} className="flex-none basis-1/1 md:basis-1/6">
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex flex-col items-center">
                                    <Image src={"/assets/logo.png"} height={300} width={300} alt="" className="w-auto h-30 md:h-[140px] lg:h-[120px]" />
                                    <h1 className="mt-5">Dranreb</h1>
                                    <small className="text-xs">Chapter Founder</small>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>

            <div className="absolute top-1/2 left-2 flex items-center justify-center">
                <CarouselPrevious className="relative left-0 translate-x-0 hover:translate-x-0 hover:bg-primary/90" />
            </div>

            <div className="absolute top-1/2 right-2 flex items-center justify-center">
                <CarouselNext className="relative right-0 translate-x-0 hover:translate-x-0 hover:bg-primary/90" />
            </div>

        </Carousel>
    )
}
