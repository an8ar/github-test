import { normalizeExternalUrl } from '../lib/utils'
import type { GithubUser } from '../model/types'

type UserLinksProps = {
  user: GithubUser
}

export function UserLinks({ user }: UserLinksProps) {
  const blogUrl = normalizeExternalUrl(user.blog)

  return (
    <dl className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
      <div className="rounded-2xl border border-border/70 bg-background p-4">
        <dt className="text-xs uppercase tracking-[0.2em]">Company</dt>
        <dd className="mt-2 text-base text-foreground">{user.company ?? 'Not set'}</dd>
      </div>
      <div className="rounded-2xl border border-border/70 bg-background p-4">
        <dt className="text-xs uppercase tracking-[0.2em]">Location</dt>
        <dd className="mt-2 text-base text-foreground">{user.location ?? 'Not set'}</dd>
      </div>
      <div className="rounded-2xl border border-border/70 bg-background p-4 sm:col-span-2">
        <dt className="text-xs uppercase tracking-[0.2em]">Links</dt>
        <dd className="mt-2 flex flex-wrap gap-3">
          <a
            className="inline-flex items-center rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:opacity-90"
            href={user.html_url}
            rel="noreferrer"
            target="_blank"
          >
            Open on GitHub
          </a>
          {blogUrl && (
            <a
              className="inline-flex items-center rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition hover:bg-muted"
              href={blogUrl}
              rel="noreferrer"
              target="_blank"
            >
              Personal site
            </a>
          )}
        </dd>
      </div>
    </dl>
  )
}
