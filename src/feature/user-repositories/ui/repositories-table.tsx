import { ArrowDownUp } from 'lucide-react'
import { cn } from '@/shared/lib/utils'
import type { RepositoriesTableHeaderCellProps, RepositoriesTableProps } from '../lib/types'

export function RepositoriesTable({ flexRender, isUpdating, table }: RepositoriesTableProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border/70">
      <div className={cn('overflow-x-auto transition-opacity', isUpdating && 'opacity-70')}>
        <table className={cn('min-w-full border-collapse', isUpdating && 'animate-pulse')}>
          <thead className={cn('bg-muted/50', isUpdating && 'bg-muted/70')}>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <RepositoriesTableHeaderCell
                    key={header.id}
                    flexRender={flexRender}
                    header={header}
                  />
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className={cn('border-t border-border/70', isUpdating && 'bg-muted/20')}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-4 align-top text-sm text-muted-foreground">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isUpdating && (
        <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-transparent via-background/35 to-transparent" />
      )}
    </div>
  )
}

function RepositoriesTableHeaderCell({ flexRender, header }: RepositoriesTableHeaderCellProps) {
  const canSort = header.column.getCanSort()
  const sortDirection = header.column.getIsSorted()
  const headerContent = flexRender(header.column.columnDef.header, header.getContext())

  if (header.isPlaceholder) {
    return (
      <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground" />
    )
  }

  if (!canSort) {
    return (
      <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        <span>{headerContent}</span>
      </th>
    )
  }

  return (
    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
      <button
        className="inline-flex items-center gap-2 text-left transition hover:text-foreground"
        onClick={header.column.getToggleSortingHandler()}
        type="button"
      >
        <span>{headerContent}</span>
        <ArrowDownUp className="size-3.5" />
        <span className="text-[10px] normal-case tracking-normal text-muted-foreground">
          {sortDirection === 'asc' && 'Asc'}
          {sortDirection === 'desc' && 'Desc'}
        </span>
      </button>
    </th>
  )
}
