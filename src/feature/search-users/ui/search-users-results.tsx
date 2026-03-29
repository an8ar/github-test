import { useRef } from 'react'
import { getUsersFromPages } from '../lib/utils'
import { useSuspenseSearchGithubUsersQuery } from '../api/use-search-github-users-query'
import { useInfiniteScroll } from '../model/use-infinite-scroll'
import { useRestoreSelectedUser } from '../model/use-restore-selected-user'
import { SearchUsersEmpty } from './search-users-empty'
import { SearchUsersError } from './search-users-error'
import { SearchUsersList } from './search-users-list'
import type { SearchUsersResultsProps } from './types'

export function SearchUsersResults({
  normalizedQuery,
  onRestoreComplete,
  query,
  selectedUser,
}: SearchUsersResultsProps) {
  const loadMoreRef = useRef<HTMLDivElement | null>(null)
  const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useSuspenseSearchGithubUsersQuery(normalizedQuery)
  const users = getUsersFromPages(data)

  useRestoreSelectedUser({
    canLoadMore: hasNextPage,
    isLoadingMore: isFetchingNextPage,
    onLoadMore: () => {
      void fetchNextPage()
    },
    onRestoreComplete,
    selectedUser,
  })

  useInfiniteScroll({
    canLoadMore: hasNextPage,
    isLoadingMore: isFetchingNextPage,
    onLoadMore: () => {
      void fetchNextPage()
    },
    targetRef: loadMoreRef,
  })

  if (error) {
    return <SearchUsersError />
  }

  if (!users.length) {
    return <SearchUsersEmpty />
  }

  return (
    <SearchUsersList
      hasNextPage={hasNextPage}
      isFetchingNextPage={isFetchingNextPage}
      loadMoreRef={loadMoreRef}
      query={query}
      users={users}
    />
  )
}
