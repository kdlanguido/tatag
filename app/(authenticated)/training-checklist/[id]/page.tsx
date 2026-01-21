import { Undo2 } from 'lucide-react';
import { fetchTrainingChecklist } from '../../_data/trainingChecklist';
import { checkIfUserIsAdmin, fetchUserProfileById } from '../../_data/user';
import ChecklistDT from '../_components/ChecklistDT/Table';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function page({ params }: { params: Promise<{ id: string }> }) {

    const { id } = await params;
    const checklist = await fetchTrainingChecklist(id);
    const user = await fetchUserProfileById(id);
    const isAdmin = await checkIfUserIsAdmin();

    return (
        <div className='flex flex-1 flex-col gap-4 p-4'>
            <div className="w-full">
                <div className='flex justify-between'>
                    <div className="flex flex-col mb-3">
                        <h1 className="font-semibold text-xl">Training Checklist</h1>
                        <p className="text-sm text-muted-foreground">
                            {!isAdmin ? "Puller" : user?.nickname + "'s"} training summary
                        </p>
                    </div>
                    <Button variant="outline" hidden={!isAdmin}>
                        <Link href="/admin/applicants"  className='flex gap-2'><Undo2 /> Back</Link>
                    </Button>
                </div>
                <ChecklistDT checklistItems={checklist} isAdmin={isAdmin} applicantId={id} />
            </div>
        </div>
    );
}
