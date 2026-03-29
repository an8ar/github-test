import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom'

export function RouteErrorBoundary() {
  const error = useRouteError()

  return (
    <section className="mx-auto max-w-3xl">
      <div className="rounded-[2rem] border border-destructive/20 bg-card/90 p-8 shadow-sm">
        <div className="space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">
            Error
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Something went wrong
          </h1>
          <p className="text-base leading-7 text-destructive sm:text-lg">
            {getErrorMessage(error)}
          </p>
        </div>

        <div className="mt-8">
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

function getErrorMessage(error: unknown) {
  if (isRouteErrorResponse(error)) {
    return error.statusText || 'The page could not be loaded.'
  }

  if (error instanceof Error) {
    return error.message
  }

  return 'The page could not be loaded.'
}
