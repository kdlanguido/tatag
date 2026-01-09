import { Suspense } from 'react'
import { fetchProfile } from '@/actions/user'
import CreateTrainingForm from '@/components/admins/Trainings/Forms/CreateTrainingForm'

export default function Page() {

    const profileData = fetchProfile()

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <CreateTrainingForm profileData={profileData} />
        </Suspense>
    )
}
