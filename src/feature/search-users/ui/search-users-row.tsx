import { Link } from 'react-router-dom'
import { prefetchUserProfile } from '@/entity/user'
import type { SearchUsersRowProps } from './types'

export function SearchUsersRow({ index, onSelect, user }: SearchUsersRowProps) {
  return (
    <Link
      className="flex items-center gap-3 px-3 py-3 transition hover:bg-muted/60"
      onClick={onSelect}
      onFocus={() => {
        void prefetchUserProfile(user.login)
      }}
      onMouseEnter={() => {
        void prefetchUserProfile(user.login)
      }}
      to={`/user/${user.login}`}
    >
      <img
        alt={`${user.login} avatar`}
        className="size-10 rounded-full border border-border/70 object-cover"
        src={user.avatar_url}
      />

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-foreground">{user.login}</p>
        <p className="truncate text-xs text-muted-foreground">{user.type}</p>
      </div>

      <span className="text-xs text-muted-foreground">{index + 1}</span>
    </Link>
  )
}
