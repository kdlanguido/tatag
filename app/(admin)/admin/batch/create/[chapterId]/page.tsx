import { Suspense } from 'react'
import { fetchProfile } from '@/actions/user'
import CreateForm from '@/app/(admin)/admin/batch/_components/CreateForm'

export default async function Page({ params }: { params: Promise<{ chapterId: string }> }) {
    const profileData = await fetchProfile()
    const { chapterId } = await params
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <CreateForm profileData={profileData} chapterId={chapterId} />
        </Suspense>
    )
}
