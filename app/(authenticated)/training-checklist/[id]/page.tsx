import { TrainingChecklistDT } from '@/app/(authenticated)/training-checklist/_components/DataTables/TrainingChecklistDT/Data-Table';
import { columns } from '@/app/(authenticated)/training-checklist/_components/DataTables/TrainingChecklistDT/Columns';
import { fetchTrainingChecklist } from '../../_data/trainingChecklist';

export default async function page({params}: {params: Promise<{id: string}>}) {

    const {id} = await params;
    const data = await fetchTrainingChecklist(id);

    return (
        <div className='flex flex-1 flex-col gap-4 p-4'>
            <div className="w-full">
                <div className="mb-5 flex flex-col">
                    <h1 className="font-semibold text-xl">Training Checklist</h1>
                    <p className="text-sm text-muted-foreground">Puller training summary</p>
                </div>
                <TrainingChecklistDT columns={columns} data={data} />
            </div>
        </div>
    );
}
