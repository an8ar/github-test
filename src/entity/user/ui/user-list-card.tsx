import { Link } from 'react-router-dom'
import { prefetchUserProfile } from '../api/prefetch-user-profile'
import type { GithubUserListItem } from '../model/types'

type UserListCardProps = {
  user: GithubUserListItem
}

export function UserListCard({ user }: UserListCardProps) {
  return (
    <Link
      className="group flex items-center gap-4 rounded-2xl border border-border/70 bg-background p-4 transition hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-sm"
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
        className="size-14 rounded-full border border-border/70 object-cover"
        src={user.avatar_url}
      />

      <div className="min-w-0 flex-1">
        <p className="truncate text-base font-semibold text-foreground">{user.login}</p>
        <p className="text-sm text-muted-foreground">{user.type}</p>
        <p className="mt-1 text-sm text-muted-foreground transition group-hover:text-foreground">
          Open profile card
        </p>
      </div>
    </Link>
  )
}
