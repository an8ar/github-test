import { queryOptions } from '@tanstack/react-query'
import { gitHubClient } from '@/shared/api/github-client'
import { QUERY_TIME } from '@/shared/constants/query'
import { queryKeys } from '@/shared/lib/query-keys'

export function getGithubUserQueryOptions(login: string) {
  return queryOptions({
    enabled: Boolean(login),
    gcTime: QUERY_TIME.userGcTime,
    queryKey: queryKeys.githubUsers.details(login),
    queryFn: () => gitHubClient.fetchUser(login),
    staleTime: QUERY_TIME.userStaleTime,
  })
}
