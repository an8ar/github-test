import { SearchUsersStatus } from './search-users-status'

export function SearchUsersEmpty() {
  return (
    <div className="space-y-3">
      <SearchUsersStatus statusText="No matches" />
      <div className="rounded-xl border border-dashed border-border/70 px-3 py-4 text-sm text-muted-foreground">
        No users found.
      </div>
    </div>
  )
}
