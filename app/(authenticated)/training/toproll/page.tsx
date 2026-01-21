import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export const dynamic = "force-static"

export default async function Page() {

    const WhatIsToproll = () => (
        <div className='flex flex-col gap-4 w-full'>
            <div>
                <p className=" text-sm text-muted-foreground text-justify">A toproll <b>attacks your opponent&apos;s fingers and wrist</b>, aiming to open their hand and take away their strength. Instead of pulling them straight down, you rise over their hand and apply leverage.</p>
            </div>

        </div>
    )

    return (
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

                    {/* <AccordionItem value="item-3">
                            <AccordionTrigger>Toproll Trainings</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 items-center">
                                <TrainingVideos />
                            </AccordionContent>
                        </AccordionItem> */}

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
    )
}
