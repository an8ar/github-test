import { useInfiniteQuery, useSuspenseInfiniteQuery } from '@tanstack/react-query'
import { gitHubClient } from '@/shared/api/github-client'
import { GITHUB_LIMITS } from '@/shared/constants/github'
import { QUERY_TIME } from '@/shared/constants/query'
import { queryKeys } from '@/shared/lib/query-keys'

export function useSearchGithubUsersQuery(query: string) {
  const normalizedQuery = query.trim()

  return useInfiniteQuery({
    initialPageParam: 1,
    enabled: normalizedQuery.length >= 2,
    gcTime: QUERY_TIME.searchUsersGcTime,
    queryKey: queryKeys.githubUsers.search(normalizedQuery),
    queryFn: ({ pageParam }) =>
      gitHubClient.searchUsers(normalizedQuery, pageParam, GITHUB_LIMITS.searchUsersPerPage),
    getNextPageParam: (lastPage, allPages) => {
      const loadedItems = allPages.reduce((count, page) => count + page.items.length, 0)
      const maxAvailableItems = Math.min(lastPage.total_count, GITHUB_LIMITS.maxSearchItems)

      if (
        loadedItems >= maxAvailableItems ||
        lastPage.items.length < GITHUB_LIMITS.searchUsersPerPage
      ) {
        return undefined
      }

      return allPages.length + 1
    },
    staleTime: QUERY_TIME.searchUsersStaleTime,
  })
}

export function useSuspenseSearchGithubUsersQuery(query: string) {
  const normalizedQuery = query.trim()

  return useSuspenseInfiniteQuery({
    initialPageParam: 1,
    gcTime: QUERY_TIME.searchUsersGcTime,
    queryKey: queryKeys.githubUsers.search(normalizedQuery),
    queryFn: ({ pageParam }) =>
      gitHubClient.searchUsers(normalizedQuery, pageParam, GITHUB_LIMITS.searchUsersPerPage),
    getNextPageParam: (lastPage, allPages) => {
      const loadedItems = allPages.reduce((count, page) => count + page.items.length, 0)
      const maxAvailableItems = Math.min(lastPage.total_count, GITHUB_LIMITS.maxSearchItems)

      if (
        loadedItems >= maxAvailableItems ||
        lastPage.items.length < GITHUB_LIMITS.searchUsersPerPage
      ) {
        return undefined
      }

      return allPages.length + 1
    },
    staleTime: QUERY_TIME.searchUsersStaleTime,
  })
}
