import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { getYouTubeId } from '@/lib/utils'
import Image from 'next/image'
import { Suspense } from 'react'

export default async function Page() {

    const WhatIsHook = () => (
        <div className='flex flex-col gap-4 w-full'>
            <div>
                <p className=" text-sm text-muted-foreground text-justify">Hook is an <strong>inside pulling technique </strong>
                    where the athlete curls the wrist inward and keeps the arm bent to engage close-range strength.
                    The goal of the hook is to dominate the opponent by controlling the wrist and pulling the match into an inside position where forearm,
                    biceps, and upper-body strength are maximized.</p>
            </div>

            <div>
                <p className=" text-sm text-muted-foreground text-justify">In a proper hook, the wrist remains flexed, the elbow stays tight to the body, and pressure is applied steadily rather than explosively. This position allows the puller to reduce the opponent&apos;s leverage and apply continuous force until the opponent&apos;s hand is brought down to the pad.</p>
            </div>

            <div>
                <p className=" text-sm text-muted-foreground text-justify">The hook relies heavily on wrist flexion, forearm strength, biceps engagement, and back pressure. It is commonly used in strength-based matches that require control, endurance, and solid fundamentals rather than speed.</p>
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
                            <h1 className="font-semibold">Training 2 : Hook</h1>
                            <h1 className=" text-sm text-muted-foreground">Armwrestling Fundamentals</h1>
                        </div>
                    </div>

                    <Accordion type="single"
                        collapsible
                        className="w-full"
                        defaultValue="item-1">

                        <AccordionItem value="item-1">
                            <AccordionTrigger>What is Hook?</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4">
                                <WhatIsHook />
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                            <AccordionTrigger>Key Techniques in Hook?</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4">
                                <div className="mb-5 flex justify-between flex-col gap-3">
                                    <div>
                                        <h1 className="font-bold text-muted-foreground">Cupping</h1>
                                        <p className="text-sm text-muted-foreground text-justify">
                                            Keeping your wrist bent (cupped) and tight. A loose wrist gives your opponent access to a toproll. Wrist dominance decides most hook battles.
                                        </p>
                                    </div>
                                    <div>
                                        <h1 className="font-bold text-muted-foreground">Wrist Control</h1>
                                        <h1 className=" text-sm text-muted-foreground text-justify">Turning your hand so your knuckles roll over theirs.</h1>
                                    </div>
                                    <div>
                                        <h1 className="font-bold text-muted-foreground">Rising</h1>
                                        <h1 className=" text-sm text-muted-foreground text-justify">Lifting your knuckles upward to weaken their grip.</h1>
                                    </div>
                                    <div>
                                        <h1 className="font-bold text-muted-foreground">Wrist Integrity</h1>
                                        <h1 className=" text-sm text-muted-foreground text-justify">Keeping your wrist straight or slightly cupped.</h1>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                            <AccordionTrigger>Hook Trainings</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 items-center">
                                <TrainingVideos />
                            </AccordionContent>
                        </AccordionItem>

                        {/* <AccordionItem value="item-3">
                            <AccordionTrigger>Trainings for Hook</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
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
