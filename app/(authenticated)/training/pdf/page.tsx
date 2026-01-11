import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Suspense } from 'react'

export default async function Page() {

    const coc = [
        {
            title: "Titan Arms Brotherhood Code of Conduct",
            descriptions: [
                {
                    info: (
                        <>
                            Prueba De Fuerza is the tradition that every member has successfully went through.
                            It is in a form of supermatch between the applicant and a member of the same weight class.
                            This is where the applicant showcase all the learnings and the applicant must win the supermatch.

                            <br />
                            If incase
                        </>
                    )
                },
            ]
        },
    ]

    const HowToBeAMember = () => (
        <div className='flex flex-col gap-4 w-full'>
            <div>
                <h1 className="font-bold text-muted-foreground text-sm mb-1">Become an Applicant</h1>
                <p className=" text-sm text-muted-foreground text-justify">An interested individual should first become an applicant.
                    The individual should find the closest available chapter and introduce themselves to a member or an admin.
                    The member or admin will then introduce the individual as an applicant to the chapter. To become an official applicant,
                    the individual must be added to the Applicant&apos;s Group Chat and register on the Titan Arms Portal.</p>
            </div>

            <div>
                <p className="font-bold text-muted-foreground text-sm mb-1">Orientation</p>
                <p className=" text-sm text-muted-foreground text-justify">An applicant shall undergo orientation conducted by an admin. During this orientation, the admin shall read the Code of Conduct to the applicant and ensure that the applicant fully comprehends its contents.</p>
            </div>

            <div>
                <p className="font-bold text-muted-foreground text-sm mb-1">Armwrestling Fundamentals Training</p>
                <p className=" text-sm text-muted-foreground text-justify">An applicant is required to attend sparring sessions at the chapter headquarters to acquire knowledge of Armwrestling Fundamentals from the members. These sessions are a crucial part of the applicant&apos;s journey, as the admins will assess their readiness for the Prueba de Fuerza during sparring.
                </p>
            </div>

            <div>
                <h1 className="font-bold text-muted-foreground text-sm mb-1">Prueba De Fuerza</h1>
                <p className=" text-sm text-muted-foreground text-justify">An applicant deemed well-equipped with the fundamentals of armwrestling and prepared for amateur tournaments shall undergo the Prueba de Fuerza, a traditional assessment conducted in the form of a supermatch, in which the applicant competes against a member of the same weight class. Successful performance in this trial will result in the applicant&apos;s official induction into the brotherhood.</p>
            </div>

            <div>
                <h1 className="font-bold text-muted-foreground text-sm mb-1">Welcome Rites</h1>
                <p className=" text-sm text-muted-foreground text-justify">A ceremony shall be held for applicants who have successfully completed the Prueba de Fuerza. During the ceremony, the officiator will formally transmit the knowledge of the symbolic handshake and officially welcome the new member into the brotherhood. The members will form a circle, through which the new member will proceed, offering the symbolic handshake to each member, while the existing members extend their congratulations and formally welcome the new member into the fold.</p>
            </div>
        </div>
    )

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className='flex flex-1 flex-col gap-4 p-4'>
                <div className="w-full md:w-1/2">
                    <div className="mb-5 flex justify-between">
                        <div className="flex flex-col">
                            <h1 className="font-semibold">Training 4 : Prueba De Fuerza</h1>
                            <h1 className=" text-sm text-muted-foreground">Final step as an applicant</h1>
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

                        <AccordionItem value="item-2">
                            <AccordionTrigger>How to be a member?</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4">
                                <HowToBeAMember />
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                            <AccordionTrigger>Code of Conduct</AccordionTrigger>
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
