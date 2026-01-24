import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Card,
  CardContent,
} from "@/components/ui/card"

const items = [
  {
    value: "v1",
    trigger: "Does Titan Arms have any form of hazing?",
    content:
      "No, Titan Arms does not engage in any form of hazing. Our brotherhood is purely focused on armwrestling, fostering skill, knowledge, and camaraderie in the sport.",
  },
  {
    value: "v2",
    trigger: "Does Titan Arms collect membership fees?",
    content:
      "No, Titan arms do not collect any amount from applicant or members.",
  },
  {
    value: "v3",
    trigger: "Does Titan Arms assume responsibility for medical expenses incurred due to injury during training or events?",
    content:
      "No. Titan Arms does not collect any fees from its members, and the brotherhood does not provide insurance. This underscores the importance of attending training sessions, where members are equipped with proper knowledge and techniques to minimize the risk of injury before participating in matches.",
  },
  {
    value: "v4",
    trigger: "Does Titan Arms accept minor applicants?",
    content:
      "Yes, Titan Arms accepts minor applicants, provided they are in good physical condition and have no history of orthopedic injuries.",
  },
]

export function FaqAccordion() {
  return (
    <Card className="w-full">
      <CardContent>
        <Accordion type="single" collapsible defaultValue="plans">
          {items.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger>{item.trigger}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}
