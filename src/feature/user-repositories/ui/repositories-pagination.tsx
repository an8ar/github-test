import { Button } from '@/shared/components/ui/button'
import type { RepositoriesPaginationProps } from '../lib/types'

export function RepositoriesPagination({ isUpdating, table }: RepositoriesPaginationProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <p className="text-sm text-muted-foreground">
        Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
      </p>

      <div className="flex items-center gap-2">
        <Button
          disabled={!table.getCanPreviousPage() || isUpdating}
          onClick={() => table.previousPage()}
          type="button"
          variant="outline"
        >
          Previous
        </Button>
        <Button
          disabled={!table.getCanNextPage() || isUpdating}
          onClick={() => table.nextPage()}
          type="button"
          variant="outline"
        >
          Next
        </Button>
      </div>
    </div>
  )
}
