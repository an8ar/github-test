import { useMemo } from 'react'
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import type { GithubRepositorySearchItem } from '@/entity/user'
import { formatRepositoryCount } from '../lib/utils'
import type { UseUserRepositoriesTableParams } from '../lib/types'

export function useUserRepositoriesTable({
  pageCount,
  pagination,
  repositories,
  setPageIndex,
  setSorting,
  sorting,
}: UseUserRepositoriesTableParams) {
  const columns = useMemo<ColumnDef<GithubRepositorySearchItem>[]>(
    () => [
      {
        accessorKey: 'name',
        cell: ({ row }) => {
          const repository = row.original

          return (
            <a
              className="font-medium text-foreground hover:underline"
              href={repository.html_url}
              rel="noreferrer"
              target="_blank"
            >
              {repository.name}
            </a>
          )
        },
        header: 'Repository',
      },
      {
        accessorKey: 'stargazers_count',
        cell: ({ getValue }) => formatRepositoryCount(getValue<number>()),
        header: 'Stars',
      },
    ],
    [],
  )

  const table = useReactTable({
    columns,
    data: repositories,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    manualSorting: true,
    onPaginationChange: (updater) => {
      const nextPagination =
        typeof updater === 'function' ? updater(pagination) : updater

      setPageIndex(nextPagination.pageIndex)
    },
    onSortingChange: (updater) => {
      const nextSorting = typeof updater === 'function' ? updater(sorting) : updater
      setSorting(nextSorting)
      setPageIndex(0)
    },
    pageCount,
    state: {
      pagination,
      sorting,
    },
  })

  return {
    flexRender,
    table,
  }
}
