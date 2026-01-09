import { Suspense } from 'react'
import ProfileForm from '../../../components/members/Profile/ProfileForm'
import { fetchProfile } from '@/actions/user'

export default function Page() {

    const profile = fetchProfile()

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ProfileForm profile={profile} />
        </Suspense>
    )
}
