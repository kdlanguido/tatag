import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export const dynamic = "force-static"

export default async function Page() {

    const coc = [
        {
            descriptions: [
                {
                    info: (
                        <>
                            Every applicant that successfully completes the Prueba De Fuerza, will be given an opportunity to partake in the Welcome Rites.
                            This ceremony is a significant milestone in your journey with the Titan Arms Brotherhood, symbolizing your commitment and acceptance into our community.
                            During the Welcome Rites, you will be formally introduced to the brotherhood, where you will take an oath to uphold the values and principles that define us.
                            It is a time for celebration, camaraderie, and reflection on the journey that has brought you here.
                            Embrace this moment with pride and remember that you are now part of a legacy that values strength, honor, and unity.
                        </>
                    )
                },
            ]
        },
    ]

    return (
        <div className='flex flex-1 flex-col gap-4 p-4'>
            <div className="w-full md:w-1/2">
                <div className="mb-5 flex justify-between">
                    <div className="flex flex-col">
                        <h1 className="font-semibold">Training 5 : Welcome Rites</h1>
                        <h1 className=" text-sm text-muted-foreground">A new milestone in your journey</h1>
                    </div>
                </div>

                <Accordion type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Introduction</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4">
                            {
                                coc.map((data, index) =>
                                    <div key={index}>
                                        {
                                            data.descriptions.map((description, descriptionCount) =>
                                                <h1 key={descriptionCount} className="text-justify text-sm text-muted-foreground mb-4">
                                                    {description.info}
                                                </h1>
                                            )
                                        }
                                    </div>
                                )
                            }
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>

            </div>
        </div>
    )
}
