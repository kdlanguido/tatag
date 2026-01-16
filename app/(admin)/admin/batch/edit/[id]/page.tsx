import { Suspense } from 'react'
import EditForm from '@/app/(admin)/admin/batch/_components/EditForm'
import { fetchBatchById } from '@/app/(admin)/admin/_data/batch'

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const data = await fetchBatchById(id)

    if(!data){
        return <div>Batch not found</div>
    }

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <EditForm batch={data} batchId={id} />
        </Suspense>
    )
}
