import { Suspense } from 'react'
import { fetchChapters } from '@/actions/chapter'
import { checkIfUserHasClub, fetchProfile } from '@/actions/user'
import MembershipForm from '@/components/members/Membership/Forms/MembershipForm'
import ApplicationForm from '@/components/members/Membership/Forms/ApplicationForm'
import { fetchBatchByChapterId } from '../_data/batch'

export const revalidate = 3600;

export default async function Page() {

    const chapters = await fetchChapters()
    const profileData = await fetchProfile()
    const userHasClub = await checkIfUserHasClub()
    const initialBatches = await fetchBatchByChapterId(profileData._id?.toString() ?? "")

    return (
        <Suspense fallback={<div>Loading...</div>}>
            {
                userHasClub ?
                    <MembershipForm chapterList={chapters} profile={profileData} initialBatches={initialBatches} />
                    :
                    <ApplicationForm chaptersList={chapters} profile={profileData} />
            }
        </Suspense>
    )
}
