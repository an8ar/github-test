import { useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SEARCH_PARAMS } from '@/shared/constants/search-params'
import { useDebouncedValue } from '@/shared/lib/use-debounced-value'

export function useSearchUsers() {
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get(SEARCH_PARAMS.query) ?? ''
  const selectedUser = searchParams.get(SEARCH_PARAMS.selectedUser) ?? ''

  const debouncedQuery = useDebouncedValue(query, 300)
  const normalizedQuery = debouncedQuery.trim()
  const shouldShowResults = normalizedQuery.length >= 2
  const setQuery = useCallback(
    (nextQuery: string) => {
      setSearchParams(
        (currentParams) => {
          const nextParams = new URLSearchParams(currentParams)

          if (nextQuery) {
            nextParams.set(SEARCH_PARAMS.query, nextQuery)
          } else {
            nextParams.delete(SEARCH_PARAMS.query)
          }

          nextParams.delete(SEARCH_PARAMS.selectedUser)

          return nextParams
        },
        { replace: true },
      )
    },
    [setSearchParams],
  )
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
    setQuery,
    shouldShowResults,
  }
}
