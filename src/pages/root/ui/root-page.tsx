import { SearchUsers } from '@/feature/search-users'

export function RootPage() {
  return (
    <div className="rounded-2xl border border-border/70 bg-card/80 p-8 shadow-sm ">
      <div className="space-y-4">
        <h1 className="text-5xl font-semibold">Github Users</h1>
      </div>

      <div className="mt-8 space-y-6">
        <SearchUsers />
      </div>
    </div>
  )
}
