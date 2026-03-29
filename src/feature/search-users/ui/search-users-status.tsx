import type { SearchUsersStatusProps } from './types'

export function SearchUsersStatus({ statusText }: SearchUsersStatusProps) {
  return (
    <div className="flex items-center justify-between gap-3 px-1">
      <p className="text-sm font-medium text-foreground">Users</p>
      <p className="text-xs text-muted-foreground">{statusText}</p>
    </div>
  )
}
