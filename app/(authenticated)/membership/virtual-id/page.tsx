import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { cachedCurrentUserProfile } from '../../_data/user'
import { fetchBatchById } from '../../_data/batch'
import { fetchChapterById } from '@/actions/chapter'
import IdCard from '../_components/IdCard'
import { redirect } from 'next/navigation'

export default async function page() {

  const session = await auth.api.getSession({ headers: await headers() })
  const profile = await cachedCurrentUserProfile()
  const stringifiedProfile = JSON.parse(JSON.stringify(profile))

  if(!profile.membership.batchId) redirect('/membership')
  const batch = await fetchBatchById(profile.membership.batchId.toString());
  const chapter = await fetchChapterById(profile.membership.chapterId.toString())

  return (
    <div className='flex flex-col gap-5 p-10'>
      <IdCard session={session} profile={stringifiedProfile} batch={batch} chapter={chapter}/>
    </div>
  )
}
