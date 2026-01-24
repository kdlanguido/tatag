'use client'

import { useBreakpoint } from "@/components/helper"
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export function CardHighlight() {
    const highlights = [
        {
            src: "/assets/highlights/hammerholder.png",
            isBig: false,
            title: "TATAG : Hammer Holder!",
            description: "Titan Arms Taguig (TATAG) proudly congratulates Jay Batistil, TATAG's Top 1 athlete, for winning the first-ever Brotherhood’s Legacy Hammer at the June 2025 Manila Pullers event—a testament to his strength and dedication. We salute Brother Jay for bringing honor to Titan Arms Brotherhood."
        },
        {
            src: "/assets/highlights/top3lightweight.png",
            isBig: true,
            title: "TATAG : Top 3 Lightweight PH!",
            description: "TATAG President and Pioneer Member, Helson Delamide, placed Top 3 in the Lightweight division at the 2025 National Ranking Event. His strength and dedication honor our brotherhood. Salute to Brother Helson!"
        },
        {
            src: "/assets/esta.png",
            isBig: false,
            title: "ESTA : A new chapter was born!",
            description: "Led by Michael 'Bandoy' Jaradal (TATAG - Batch 21), Titan Arms Eastern Samar (ESTA) and its chapters—ESTA Llorente and ESTA Maydolong—were founded in December 2025. A major milestone for our brotherhood’s growth! Salute to our new brothers."
        },
    ]

    const bp = useBreakpoint()

    return (
        <>
            {
                highlights.map((highlight, index) => (
                    <Card className={`${(highlight.isBig && bp === 'xl') ? 'w-[200px]' : 'max-w-sm'} relative mx-auto w-full h-max pt-0`} key={index}>
                        <div className="absolute inset-0 z-30 aspect-video" />
                        <img
                            src={highlight.src}
                            alt="Event cover"
                            className="relative z-20 aspect-video w-full object-cover brightness-80  "
                        />
                        <CardHeader>
                            <CardTitle>{highlight.title}</CardTitle>
                            <CardDescription className="w-full text-justify">
                                {highlight.description}
                            </CardDescription>
                        </CardHeader>
                    </Card>
                ))
            }
        </>
    )
}
