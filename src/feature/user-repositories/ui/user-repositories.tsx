import { useUserRepositories } from '../model/use-user-repositories'
import { useUserRepositoriesTable } from '../model/use-user-repositories-table'
import type { UserRepositoriesProps } from '../lib/types'
import { RepositoriesPagination } from './repositories-pagination'
import { RepositoriesTable } from './repositories-table'

export function UserRepositories({ initialData, login }: UserRepositoriesProps) {
  const {
    hasError,
    isUpdating,
    pageCount,
    pagination,
    repositories,
    setPageIndex,
    setSorting,
    sorting,
  } = useUserRepositories(login, initialData)

  const { flexRender, table } = useUserRepositoriesTable({
    pageCount,
    pagination,
    repositories,
    setPageIndex,
    setSorting,
    sorting,
  })
  const hasRepositories = repositories.length > 0
  const showError = hasError
  const showEmpty = !hasError && !hasRepositories
  const showTable = !hasError && hasRepositories

  return (
    <section className="space-y-5 rounded-[2rem] border border-border/70 bg-card/70 p-6 sm:p-8">
      <RepositoriesHeader />

      {showError && (
        <div className="rounded-xl border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm text-destructive">
          Unable to load repositories right now.
        </div>
      )}

      {showEmpty && (
        <div className="rounded-xl border border-dashed border-border/70 px-4 py-5 text-sm text-muted-foreground">
          This user has no public repositories.
        </div>
      )}

      {showTable && (
        <div className="space-y-4">
          <RepositoriesTable flexRender={flexRender} isUpdating={isUpdating} table={table} />
          <RepositoriesPagination isUpdating={isUpdating} table={table} />
        </div>
      )}
    </section>
  )
}

function RepositoriesHeader() {
  return (
    <div className="items-center justify-between gap-3">
      <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">
        Repositories
      </p>
    </div>
  )
}
