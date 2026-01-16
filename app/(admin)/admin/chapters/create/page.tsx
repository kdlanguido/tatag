import { Suspense } from 'react'
import { fetchProfile } from '@/actions/user'
import CreateChapterForm from '../_components/Forms/CreateChapterForm'

export default function Page() {

    const profileData = fetchProfile()

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <CreateChapterForm profileData={profileData} />
        </Suspense>
    )
}
