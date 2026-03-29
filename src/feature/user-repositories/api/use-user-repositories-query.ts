import { queryOptions, useQuery } from '@tanstack/react-query'
import { gitHubClient } from '@/shared/api/github-client'
import { GITHUB_LIMITS } from '@/shared/constants/github'
import { QUERY_TIME } from '@/shared/constants/query'
import { queryKeys } from '@/shared/lib/query-keys'

type UserRepositoriesQueryOptionsParams = {
  login: string
  order: 'asc' | 'desc'
  page: number
}

export function getUserRepositoriesQueryOptions({
  login,
  order,
  page,
}: UserRepositoriesQueryOptionsParams) {
  return queryOptions({
    enabled: Boolean(login),
    gcTime: QUERY_TIME.userRepositoriesGcTime,
    queryKey: queryKeys.userRepositories.list(login, page, order),
    queryFn: () =>
      gitHubClient.fetchUserRepositories(login, page, GITHUB_LIMITS.userRepositoriesPerPage, order),
    staleTime: QUERY_TIME.userRepositoriesStaleTime,
  })
}

export function useUserRepositoriesQuery(
  params: UserRepositoriesQueryOptionsParams,
  initialData?: ReturnType<typeof getUserRepositoriesQueryOptions>['initialData'],
) {
  return useQuery({
    ...getUserRepositoriesQueryOptions(params),
    initialData,
    placeholderData: (previousData) => previousData,
  })
}
