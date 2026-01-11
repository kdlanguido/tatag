import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { getYouTubeId } from '@/lib/utils'
import Image from 'next/image'
import { Suspense } from 'react'

export default async function Page() {

    const WhatIsToproll = () => (
        <div className='flex flex-col gap-4 w-full'>
            <div>
                <p className=" text-sm text-muted-foreground text-justify">A toproll <b>attacks your opponent&apos;s fingers and wrist</b>, aiming to open their hand and take away their strength. Instead of pulling them straight down, you rise over their hand and apply leverage.</p>
            </div>

        </div>
    )

    const TrainingVideos = () => (
        <Carousel className="w-full max-w-2xl">
            <CarouselContent className="-ml-1">
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="pl-1 lg:basis-1/2 p-1">
                        <YTCard />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )

    const videoId = getYouTubeId("https://www.youtube.com/watch?v=Q68bxYoyS2Y&list=PLg-gxAFHunNMAru4WSp8Jv6b1tjRgLps0")

    const YTCard = () => (
        <div className="w-full rounded-lg overflow-hidden shadow-md" >
            <div className="relative w-full h-40 p-1" >
                <Image
                    src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                    alt="YouTube Thumbnail"
                    fill
                    className="object-cover"
                />
            </div >

            <div className="p-3" >
                <h3 className="font-semibold">Video Title</h3>
                <p className="text-sm text-gray-500">Click to watch</p>
            </div >
        </div >
    )


    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className='flex flex-1 flex-col gap-4 p-4'>
                <div className="w-full md:w-1/2">
                    <div className="mb-5 flex justify-between">
                        <div className="flex flex-col">
                            <h1 className="font-semibold">Training 3 : Toproll</h1>
                            <h1 className=" text-sm text-muted-foreground">Armwrestling Fundamentals</h1>
                        </div>
                    </div>

                    <Accordion type="single"
                        collapsible
                        className="w-full"
                        defaultValue="item-1">

                        <AccordionItem value="item-1">
                            <AccordionTrigger>What is Toproll?</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4">
                                <WhatIsToproll />
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                            <AccordionTrigger>Key Techniques in Toproll?</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4">
                                <div className="mb-5 flex justify-between flex-col gap-3">
                                    <div>
                                        <h1 className="font-bold text-muted-foreground">Back Pressure</h1>
                                        <h1 className=" text-sm text-muted-foreground">Pulling your opponent&apos;s hand toward you.</h1>
                                    </div>
                                    <div>
                                        <h1 className="font-bold text-muted-foreground">Pronation</h1>
                                        <h1 className=" text-sm text-muted-foreground">Turning your hand so your knuckles roll over theirs.</h1>
                                    </div>
                                    <div>
                                        <h1 className="font-bold text-muted-foreground">Rising</h1>
                                        <h1 className=" text-sm text-muted-foreground">Lifting your knuckles upward to weaken their grip.</h1>
                                    </div>
                                    <div>
                                        <h1 className="font-bold text-muted-foreground">Wrist Integrity</h1>
                                        <h1 className=" text-sm text-muted-foreground">Keeping your wrist straight or slightly cupped.</h1>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                            <AccordionTrigger>Toproll Trainings</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 items-center">
                                <TrainingVideos />
                            </AccordionContent>
                        </AccordionItem>

                        {/* <AccordionItem value="item-3">
                            <AccordionTrigger>Trainings for Hook</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4">
                                {
                                    coc.map((data, index) =>
                                        <div key={index}>
                                            {
                                                data.descriptions.map((description, descriptionCount) => <h1 key={descriptionCount} className="text-justify text-sm text-muted-foreground mb-4">
                                                    {description.info}
                                                </h1>
                                                )
                                            }
                                        </div>
                                    )
                                }
                            </AccordionContent>
                        </AccordionItem> */}

                    </Accordion>


                </div>
            </div>
        </Suspense>
    )
}
