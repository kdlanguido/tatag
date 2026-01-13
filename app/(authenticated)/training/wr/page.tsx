import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Suspense } from 'react'

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

    const HowToQualify = () => (
        <div className='flex flex-col gap-4 w-full'>
            <div>
                <h1 className="font-bold text-muted-foreground text-sm mb-1">Attend Sparring Sessions</h1>
                <p className=" text-sm text-muted-foreground text-justify">Attending the sparring sessions are crucial to be qualified in Prueba De Fuerza.
                    Admins will monitor your attendance and participation during these sessions as it reflects your dedication and commitment to the Titan Arms Brotherhood.
                    This is also vital to your growth as an arm wrestler as you get to practice and learn from experienced members.
                </p>
            </div>

            <div>
                <h1 className="font-bold text-muted-foreground text-sm mb-1">Uphold the standards of our Code of Conduct</h1>
                <p className=" text-sm text-muted-foreground text-justify">
                    Adherence to Code of Conduct is non-negotiable. Demonstrating respect, integrity, and sportsmanship both on and off the table is essential.
                </p>
            </div>

            <div>
                <h1 className="font-bold text-muted-foreground text-sm mb-1">Admin Endorsement to Prueba De Fuerza</h1>
                <p className=" text-sm text-muted-foreground text-justify">
                    An admin's endorsement is required to qualify for Prueba De Fuerza. This is not just a formality but a testament to your readiness
                    and capability to take on the challenge.
                    Seek feedback from admins and work on any areas of improvement they suggest.
                </p>
            </div>
        </div>
    )

    const WhatIfFailed = () => (
        <div className='flex flex-col gap-4 w-full'>
            <div>
                <p className=" text-sm text-muted-foreground text-justify">
                    Should you fail to pass the Prueba de Fuerza, remember that this is not the end of your journey with the Titan Arms Brotherhood. Use this experience as a
                    stepping stone. Seek feedback from your opponent and the admins to identify areas for growth. 
                    Focus on honing your technique and building your strength. We encourage you to continue training until an admin reaches out to you for another opportunity.
                </p>
            </div>
        </div>
    )

    return (
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
    )
}
