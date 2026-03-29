import { useEffect, useRef } from 'react'
import { useSuspenseSearchGithubUsersQuery } from '../api/use-search-github-users-query'
import { getUsersFromPages } from '../lib/utils'
import { SearchUsersRow } from './search-users-row'
import { SearchUsersStatus } from './search-users-status'
import type { SearchUsersResultsProps } from './types'

export function SearchUsersResults({ normalizedQuery, onSelect }: SearchUsersResultsProps) {
  const loadMoreRef = useRef<HTMLDivElement | null>(null)
  const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useSuspenseSearchGithubUsersQuery(normalizedQuery)
  const users = getUsersFromPages(data)

  useEffect(() => {
    const node = loadMoreRef.current

    if (!node || !hasNextPage || isFetchingNextPage) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries

        if (entry?.isIntersecting) {
          void fetchNextPage()
        }
      },
      {
        rootMargin: '160px',
      },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [fetchNextPage, hasNextPage, isFetchingNextPage, users.length])

  if (error) {
    return (
      <div className="rounded-xl border border-destructive/20 bg-destructive/5 px-3 py-4 text-sm text-destructive">
        Unable to load users right now. Please try again.
      </div>
    )
  }

  if (!users.length) {
    return (
      <div className="space-y-3">
        <SearchUsersStatus statusText="No matches" />
        <div className="rounded-xl border border-dashed border-border/70 px-3 py-4 text-sm text-muted-foreground">
          No users found.
        </div>
      </div>
    )
  }

  const statusText = `${users.length} ${users.length === 1 ? 'match' : 'matches'}`

  return (
    <div className="space-y-3">
      <SearchUsersStatus statusText={statusText} />

      <div className="overflow-hidden rounded-xl border border-border/70 bg-background">
        {users.map((user, index) => (
          <SearchUsersRow key={user.id} index={index} onSelect={onSelect} user={user} />
        ))}

        {hasNextPage && (
          <div
            ref={loadMoreRef}
            className="border-t border-border/70 px-3 py-4 text-center text-sm text-muted-foreground"
          >
            {isFetchingNextPage ? 'Loading more users...' : 'Scroll to load more'}
          </div>
        )}
      </div>
    </div>
  )
}
