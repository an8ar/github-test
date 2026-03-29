import type { GithubUser } from '../model/types'

type UserMainInfoProps = {
  user: GithubUser
}

export function UserMainInfo({ user }: UserMainInfoProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-[auto_minmax(0,1fr)] lg:items-start">
      <img
        alt={`${user.login} avatar`}
        className="size-28 rounded-[1.75rem] border border-border/70 object-cover sm:size-36"
        src={user.avatar_url}
      />

      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {user.name ?? user.login}
          </h1>
          <p className="text-base leading-7 text-muted-foreground sm:text-lg">@{user.login}</p>
        </div>

        <p className="text-base leading-7 text-muted-foreground">
          {user.bio ?? 'This user has not added a public bio yet.'}
        </p>
      </div>
    </div>
  )
}
