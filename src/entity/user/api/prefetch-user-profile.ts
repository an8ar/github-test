import { getUserRepositoriesQueryOptions } from '@/feature/user-repositories'
import { queryClient } from '@/shared/lib/react-query'
import { getGithubUserQueryOptions } from './use-github-user-query'

export function prefetchUserProfile(login: string) {
  return Promise.all([
    queryClient.prefetchQuery(getGithubUserQueryOptions(login)),
    queryClient.prefetchQuery(
      getUserRepositoriesQueryOptions({
        login,
        order: 'desc',
        page: 1,
      }),
    ),
  ])
}
