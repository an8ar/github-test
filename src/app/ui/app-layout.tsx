import { Link, NavLink, Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,oklch(0.97_0_0),transparent_70%)]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-10">
        <header className="sticky top-0 z-10 -mx-4 border-b border-border/70 bg-background/90 px-4 backdrop-blur sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10">
          <div className="flex min-h-16 items-center justify-between gap-4 py-3">
            <Link className="text-lg font-semibold tracking-tight" to="/">
              Zypl AI
            </Link>

            <nav className=" rounded-full border border-border/70 bg-background/80 p-1">
              <NavLink
                className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition"
                end
                to="/"
              >
                Home
              </NavLink>
            </nav>
          </div>
        </header>

        <main className="flex-1 py-8 sm:py-10 lg:py-14">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
