import type { GithubUser } from '../model/types'
import { UserLinks } from './user-links'
import { UserMainInfo } from './user-main-info'
import { UserStats } from './user-stats'

type UserProfileCardProps = {
  user: GithubUser
}

export function UserProfileCard({ user }: UserProfileCardProps) {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">
          User
        </p>
      </div>

      <UserMainInfo user={user} />
      <UserStats user={user} />
      <UserLinks user={user} />
    </div>
  )
}
