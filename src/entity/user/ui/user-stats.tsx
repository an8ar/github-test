import type { GithubUser } from '../model/types'

type UserStatsProps = {
  user: GithubUser
}

export function UserStats({ user }: UserStatsProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      <div className="rounded-2xl border border-border/70 bg-background p-4">
        <p className="text-sm text-muted-foreground">Repositories</p>
        <p className="mt-2 text-2xl font-semibold text-foreground">{user.public_repos}</p>
      </div>
      <div className="rounded-2xl border border-border/70 bg-background p-4">
        <p className="text-sm text-muted-foreground">Followers</p>
        <p className="mt-2 text-2xl font-semibold text-foreground">{user.followers}</p>
      </div>
      <div className="rounded-2xl border border-border/70 bg-background p-4">
        <p className="text-sm text-muted-foreground">Following</p>
        <p className="mt-2 text-2xl font-semibold text-foreground">{user.following}</p>
      </div>
    </div>
  )
}
