import { Suspense } from 'react'
import { useParams } from 'react-router-dom'
import { UserDetailsPageContent } from './user-details-page-content'
import { UserDetailsEmptyState } from './user-details-empty-state'
import { UserDetailsPageSkeleton } from './user-details-page-skeleton'

export function UserDetailsPage() {
  const { userId } = useParams()
  const login = userId ?? ''

  if (!login) {
    return <UserDetailsEmptyState />
  }

  return (
    <section className="mx-auto max-w-4xl">
      <Suspense fallback={<UserDetailsPageSkeleton />}>
        <UserDetailsPageContent login={login} />
      </Suspense>
    </section>
  )
}
