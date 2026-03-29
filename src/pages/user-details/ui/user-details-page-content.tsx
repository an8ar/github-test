import { useSuspenseQueries } from '@tanstack/react-query'
import { Link, useLocation } from 'react-router-dom'
import { getGithubUserQueryOptions, UserProfileCard } from '@/entity/user'
import { getUserRepositoriesQueryOptions, UserRepositories } from '@/feature/user-repositories'
import { SEARCH_PARAMS } from '@/shared/constants/search-params'
import type { UserDetailsLocationState } from '@/shared/types/navigation'
import type { UserDetailsPageContentProps } from './types'

export function UserDetailsPageContent({ login }: UserDetailsPageContentProps) {
  const { state } = useLocation()
  const [userQuery, repositoriesQuery] = useSuspenseQueries({
    queries: [
      getGithubUserQueryOptions(login),
      getUserRepositoriesQueryOptions({ login, order: 'desc', page: 1 }),
    ] as const,
  })
  const backToHomeHref = getBackToHomeHref(state as UserDetailsLocationState | null)

  return (
    <div className="rounded-[2rem] border border-border/70 bg-card/90 p-6 shadow-sm sm:p-8 lg:p-10">
      <div className="space-y-8">
        <UserProfileCard user={userQuery.data} />
        <UserRepositories initialData={repositoriesQuery.data} login={login} />

        <div className="flex flex-wrap items-center gap-3">
          <Link
            className="inline-flex items-center rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:opacity-90"
            to={backToHomeHref}
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}

function getBackToHomeHref(state: UserDetailsLocationState | null) {
  const searchParams = new URLSearchParams()

  if (state?.searchQuery) {
    searchParams.set(SEARCH_PARAMS.query, state.searchQuery)
  }

  if (state?.selectedUser) {
    searchParams.set(SEARCH_PARAMS.selectedUser, state.selectedUser)
  }

  const search = searchParams.toString()

  if (!search) {
    return '/'
  }

  return `/?${search}`
}
