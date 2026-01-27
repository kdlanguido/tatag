import { Undo2 } from 'lucide-react';
import { cachedCurrentUserProfile } from '../../_data/user';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChecklistServerDT } from '../_components/ChecklistDT/Table.server';
import { redirect } from 'next/navigation';

export default async function page({ params }: { params: Promise<{ id: string }> }) {

    //applicant id
    const { id } = await params;

    const { membership, _id } = await cachedCurrentUserProfile()
    const isAdmin = membership.memberLevel === 'admin'

    //approver id
    if (!_id) redirect("/login")

    return (
        <div className='flex flex-1 flex-col gap-4 p-4'>
            <div className="w-full">
                <div className='flex justify-between'>
                    <div className="flex flex-col mb-3">
                        <h1 className="font-semibold text-xl">Training Checklist</h1>
                        <p className="text-sm text-muted-foreground">
                            Training summary
                        </p>
                    </div>
                    <Button variant="outline">
                        <Link href={isAdmin ? "/admin/applicants" : "/dashboard"} className='flex gap-2'><Undo2 /> Back</Link>
                    </Button>
                </div>
                <ChecklistServerDT isAdmin={isAdmin} applicantId={id} approvedBy={_id} />
            </div>
        </div>
    );
}
