import { Suspense } from 'react'
import UpdateTrainingForm from '@/components/admins/Trainings/Forms/UpdateTrainingForm'
import { fetchTrainingById } from '@/actions/training'

export default async function Page({ params }: { params: Promise<{ id: string }> }) {

    const { id } = await params

    if (!id) {
        return null
    }

    const data = await fetchTrainingById(id)

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <UpdateTrainingForm trainingInformation={data} />
        </Suspense>
    )
}
