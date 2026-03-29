import type { Header, PaginationState, SortingState, Table } from '@tanstack/react-table'
import type { GithubRepositorySearchItem, GithubUserRepositoriesPage } from '@/entity/user'

export type UserRepositoriesProps = {
  initialData?: GithubUserRepositoriesPage
  login: string
}

export type RepositoriesTableProps = {
  flexRender: Table<GithubRepositorySearchItem>['options']['renderFallbackValue'] extends never
    ? typeof import('@tanstack/react-table').flexRender
    : typeof import('@tanstack/react-table').flexRender
  isUpdating: boolean
  table: Table<GithubRepositorySearchItem>
}

export type RepositoriesTableHeaderCellProps = {
  flexRender: RepositoriesTableProps['flexRender']
  header: Header<GithubRepositorySearchItem, unknown>
}

export type RepositoriesPaginationProps = {
  isUpdating: boolean
  table: Table<GithubRepositorySearchItem>
}

export type UseUserRepositoriesTableParams = {
  pageCount: number
  pagination: PaginationState
  repositories: GithubRepositorySearchItem[]
  setPageIndex: (pageIndex: number) => void
  setSorting: (updater: SortingState) => void
  sorting: SortingState
}
