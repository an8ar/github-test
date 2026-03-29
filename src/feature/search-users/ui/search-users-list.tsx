import { SearchUsersRow } from './search-users-row'
import { SearchUsersStatus } from './search-users-status'
import type { SearchUsersListProps } from './types'

export function SearchUsersList({
  hasNextPage,
  isFetchingNextPage,
  loadMoreRef,
  query,
  users,
}: SearchUsersListProps) {
  const statusText = `${users.length} ${users.length === 1 ? 'match' : 'matches'}`

  return (
    <div className="space-y-3">
      <SearchUsersStatus statusText={statusText} />

      <div className="overflow-hidden rounded-xl border border-border/70 bg-background">
        {users.map((user, index) => (
          <SearchUsersRow key={user.id} index={index} query={query} user={user} />
        ))}

        {hasNextPage && (
          <div
            ref={loadMoreRef}
            className="border-t border-border/70 px-3 py-4 text-center text-sm text-muted-foreground"
          >
            {isFetchingNextPage && 'Loading more users...'}
            {!isFetchingNextPage && 'Scroll to load more'}
          </div>
        )}
      </div>
    </div>
  )
}
