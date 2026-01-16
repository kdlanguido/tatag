import { Suspense } from 'react'
import { fetchProfile } from '@/actions/user'
import { fetchChapterById } from '@/actions/chapter'
import UpdateChapterForm from '../../_components/Forms/UpdateChapterForm'

export default async function Page({ params }: { params: Promise<{ id: string }> }) {

    const profileData = await fetchProfile()
    const { id } = await params
    const chapterInfo = await fetchChapterById(id)

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <UpdateChapterForm profile={profileData} chapterInfo={chapterInfo} />
        </Suspense>
    )
}
