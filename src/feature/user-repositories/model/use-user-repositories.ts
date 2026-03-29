import { useMemo, useState } from 'react'
import type { SortingState } from '@tanstack/react-table'
import type { GithubUserRepositoriesPage } from '@/entity/user'
import { GITHUB_LIMITS } from '@/shared/constants/github'
import { useUserRepositoriesQuery } from '../api/use-user-repositories-query'

const DEFAULT_SORTING: SortingState = [{ desc: true, id: 'stargazers_count' }]

export function useUserRepositories(login: string, initialData?: GithubUserRepositoriesPage) {
  const [pageIndex, setPageIndex] = useState(0)
  const [sorting, setSorting] = useState<SortingState>(DEFAULT_SORTING)

  const starsSorting = sorting.find((item) => item.id === 'stargazers_count')
  const order = starsSorting?.desc === false ? 'asc' : 'desc'

  const query = useUserRepositoriesQuery(
    {
      login,
      order,
      page: pageIndex + 1,
    },
    pageIndex === 0 && order === 'desc' ? initialData : undefined,
  )

  const repositories = query.data?.items ?? []
  const totalCount = query.data?.total_count ?? 0
  const pageCount = Math.max(
    1,
    Math.ceil(Math.min(totalCount, GITHUB_LIMITS.maxSearchItems) / GITHUB_LIMITS.userRepositoriesPerPage),
  )

  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize: GITHUB_LIMITS.userRepositoriesPerPage,
    }),
    [pageIndex],
  )

  return {
    hasError: Boolean(query.error),
    isLoading: query.isLoading,
    isUpdating: query.isFetching && !query.isLoading,
    pageCount,
    pagination,
    repositories,
    setPageIndex,
    setSorting,
    sorting,
  }
}
