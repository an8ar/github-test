import { Link } from 'react-router-dom'

export function RootPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center gap-6 px-6 py-16">
      <div className="space-y-3">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Home</p>
        <h1 className="text-4xl font-semibold text-slate-950">Hello world</h1>
        <p className="max-w-xl text-base text-slate-600">
          This project now uses an FSD-ready route structure with a home page and a user details
          page.
        </p>
      </div>

      <div>
        <Link
          className="inline-flex items-center rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
          to="/user/42"
        >
          Open user 42
        </Link>
      </div>
    </main>
  )
}
