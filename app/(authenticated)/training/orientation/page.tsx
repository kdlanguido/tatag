import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export const dynamic = "force-static"

export default async function Page() {

    const items = [
        {
            title: "What is Titan Arms Brotherhood?",
            descriptions: [
                {
                    info: `Titan Arms is a distinguished brotherhood of disciplined armwrestlers who uphold respect both on and off the table. The organization is committed to promoting and expanding the sport of armwrestling in the Philippines, providing a safe and supportive environment for individuals who wish to explore the sport without the fear of injury. Titan Arms has established a structured pathway to ensure that every member develops a solid foundation in armwrestling fundamentals before participating in official table matches.`
                }
            ]
        },

    ]

    const coc = [
        {
            title: "Titan Arms Brotherhood Code of Conduct",
            descriptions: [
                {
                    info: (
                        <>
                            <strong className='mr-2'>
                                Code 1: Respeto &#40;Respect&#41; &#8212;
                            </strong>
                            Respect must be extended to all — to our brothers, sisters, and every member of the
                            armwrestling community. Always conduct yourself with humility and courtesy, as your
                            attitude reflects the values and integrity of our brotherhood. By living out this core value,
                            you not only uplift others but also elevate yourself. Upholding respect in all your actions will shape you into a better,
                            more honorable, and respected puller.
                        </>
                    )
                },
                {
                    info: (
                        <>
                            <strong className='mr-2'>
                                Code 2: Disiplina &#40;Discipline&#41; &#8212;
                            </strong>
                            Discipline must be consistently upheld, both during matches and whenever you are at the table.
                            Arrogance has no place in our brotherhood. Always show respect and humility, offering your
                            sparring partner or opponent your utmost effort and a disciplined demeanor.
                            Remember, whenever you step onto the table, you carry not only your own name but the name and honor of our
                            brotherhood. By embodying this core value, you commit yourself to becoming the highest and most
                            disciplined version of who you can be.
                        </>
                    )
                },
                {
                    info: (
                        <div>
                            <strong className='mr-2'>
                                Code 3: Kaugalian ng Pagbati sa Kapatid &#40;Greeting Custom&#41; &#8212;
                            </strong>
                            Every fully initiated member shall be instructed in the symbolic handshake, a distinguished gesture reserved exclusively for
                            <em className='ml-1'>members proven through Prueba de Fuerza</em>.
                            <div className='mt-2'>
                                This handshake is to be exchanged strictly among members, whether within or outside the chapter headquarters.
                                It <em>must not be extended to, nor taught to, applicants, visitors, or any individual</em> outside the brotherhood,
                                as it reflects our respect for each member&apos;s sacrifices in becoming a member,
                                serves as a recognition of their achievement in proving their strength in the Prueba de Fuerza,
                                and symbolizes our pledge and commitment to the brotherhood.
                            </div>
                        </div>

                    )
                },
                {
                    info: (
                        <div>
                            <strong className='mr-2'>
                                Code 4: Pangangalaga at Pagpapanatili ng Headquarters &#40;Care and Preservation of Headquarters&#41; &#8212;
                            </strong>
                            Each chapter member and applicant is required to maintain the cleanliness and order of the headquarters.
                            Members shall ensure that all areas are kept tidy, equipment and furnishings are treated with care,
                            and all shared resources are respected. This responsibility reflects our collective respect for the chapter,
                            promotes a welcoming and safe environment for all members, and upholds the pride and dignity of our brotherhood.
                        </div>

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
        <div className='flex flex-1 flex-col gap-4 p-4'>
            <div className="w-full md:w-1/2">
                <div className="mb-5 flex justify-between">
                    <div className="flex flex-col">
                        <h1 className="font-semibold">Training 1 : Orientation</h1>
                        <h1 className=" text-sm text-muted-foreground">Initial step as applicant</h1>
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
                                items.map((data, index) =>
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
    )
}
