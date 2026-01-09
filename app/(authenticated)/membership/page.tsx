import { Suspense } from 'react'
import { fetchChapters } from '@/actions/chapter'
import { checkIfUserHasClub, fetchProfile } from '@/actions/user'
import MembershipForm from '@/components/members/Membership/Forms/MembershipForm'
import ApplicationForm from '@/components/members/Membership/Forms/ApplicationForm'

export default async function Page() {

    const chapters = await fetchChapters()
    const profileData = await fetchProfile()
    const userHasClub = await checkIfUserHasClub()

    return (
        <Suspense fallback={<div>Loading...</div>}>
            {
                userHasClub ?
                    <MembershipForm chapterList={chapters} profile={profileData} />
                    :
                    <ApplicationForm chaptersList={chapters} profile={profileData} />
            }
        </Suspense>
    )
}
