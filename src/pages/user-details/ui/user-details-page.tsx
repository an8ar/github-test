import { Link, useParams } from 'react-router-dom'

export function UserDetailsPage() {
  const { someId } = useParams()

  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center gap-6 px-6 py-16">
      <div className="space-y-3">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">User</p>
        <h1 className="text-4xl font-semibold text-slate-950">User details</h1>
        <p className="text-base text-slate-600">
          Current route parameter: <span className="font-semibold text-slate-950">{someId}</span>
        </p>
      </div>

      <div>
        <Link
          className="inline-flex items-center rounded-full border border-slate-300 px-5 py-3 text-sm font-medium text-slate-900 transition hover:border-slate-950"
          to="/"
        >
          Back to home
        </Link>
      </div>
    </main>
  )
}
