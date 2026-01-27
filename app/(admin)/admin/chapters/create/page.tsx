import { Suspense } from 'react'
import { fetchProfile } from '@/actions/user'
import CreateChapterForm from '../_components/Forms/CreateChapterForm'
import { fetchAllUsers } from '../../_data/user'

export default function Page() {

    const profileData = fetchProfile()
    const usersList = fetchAllUsers();

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <CreateChapterForm profileData={profileData} userList={usersList} />
        </Suspense>
    )
}
