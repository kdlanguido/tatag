import { Suspense } from 'react'
import { fetchProfile } from '@/actions/user'
import CreateChapterForm from '@/components/admins/Chapters/Forms/CreateChapterForm'

export default function Page() {

    const profileData = fetchProfile()

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <CreateChapterForm profileData={profileData} />
        </Suspense>
    )
}
