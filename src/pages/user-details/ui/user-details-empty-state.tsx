import { Link } from 'react-router-dom'

export function UserDetailsEmptyState() {
  return (
    <section className="mx-auto max-w-4xl">
      <div className="rounded-[2rem] border border-border/70 bg-card/90 p-6 shadow-sm sm:p-8 lg:p-10">
        <div className="space-y-6">
          <header className="space-y-3">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">
              User
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Profile unavailable
            </h1>
            <p className="text-base leading-7 text-destructive sm:text-lg">
              No GitHub user was selected.
            </p>
          </header>

          <Link
            className="inline-flex items-center rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:opacity-90"
            to="/"
          >
            Back to home
          </Link>
        </div>
      </div>
    </section>
  )
}
