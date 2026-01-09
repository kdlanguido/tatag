import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ApplicantsCard from './ApplicantsCard'
import { Users } from 'lucide-react'

export default function ApplicantTabs() {
    return (
        <Tabs defaultValue="new">
            <TabsList>
                <TabsTrigger value="new">
                    <Users className="h-4 w-4" />
                    New Applicants
                </TabsTrigger>
                <TabsTrigger value="old">Existing Applicants</TabsTrigger>
            </TabsList>
            <TabsContent value="new">
                <ApplicantsCard fetchIsNew={true} />
            </TabsContent>
            <TabsContent value="old">
                <ApplicantsCard fetchIsNew={false} />
            </TabsContent>
        </Tabs>
    )
}
