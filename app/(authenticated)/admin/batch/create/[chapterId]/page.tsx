import { Suspense } from 'react'
import { fetchProfile } from '@/actions/user'
import CreateBatchForm from '@/components/admins/Batch/Create/CreateBatchForm'

export default async function Page({ params }: { params: Promise<{ chapterId: string }> }) {
    const profileData = await fetchProfile()
    const { chapterId } = await params
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <CreateBatchForm profileData={profileData} chapterId={chapterId} />
        </Suspense>
    )
}
