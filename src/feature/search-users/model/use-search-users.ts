import { useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SEARCH_PARAMS } from '@/shared/constants/search-params'
import { useDebouncedValue } from '@/shared/lib/use-debounced-value'

export function useSearchUsers() {
  const [searchParams, setSearchParams] = useSearchParams()
  const queryParam = searchParams.get(SEARCH_PARAMS.query) ?? ''
  const selectedUser = searchParams.get(SEARCH_PARAMS.selectedUser) ?? ''
  const [query, setQuery] = useState(queryParam)

  const debouncedQuery = useDebouncedValue(query, 300)
  const normalizedQuery = debouncedQuery.trim()
  const shouldShowResults = normalizedQuery.length >= 2
  const updateQuery = useCallback(
    (nextQuery: string) => {
      setQuery(nextQuery)

      setSearchParams(
        (currentParams) => {
          const nextParams = new URLSearchParams(currentParams)
          nextParams.delete(SEARCH_PARAMS.selectedUser)
          return nextParams
        },
        { replace: true },
      )
    },
    [setSearchParams],
  )

  useEffect(() => {
    setQuery(queryParam)
  }, [queryParam])

  useEffect(() => {
    setSearchParams(
      (currentParams) => {
        const currentQuery = currentParams.get(SEARCH_PARAMS.query) ?? ''

        if (currentQuery === debouncedQuery) {
          return currentParams
        }

        const nextParams = new URLSearchParams(currentParams)

        if (debouncedQuery) {
          nextParams.set(SEARCH_PARAMS.query, debouncedQuery)
        } else {
          nextParams.delete(SEARCH_PARAMS.query)
        }

        return nextParams
      },
      { replace: true },
    )
  }, [debouncedQuery, setSearchParams])

  const clearSelectedUser = useCallback(() => {
    setSearchParams(
      (currentParams) => {
        if (!currentParams.has(SEARCH_PARAMS.selectedUser)) {
          return currentParams
        }

        const nextParams = new URLSearchParams(currentParams)
        nextParams.delete(SEARCH_PARAMS.selectedUser)

        return nextParams
      },
      { replace: true },
    )
  }, [setSearchParams])

  return {
    clearSelectedUser,
    normalizedQuery,
    query,
    selectedUser,
    setQuery: updateQuery,
    shouldShowResults,
  }
}
