import { useState } from 'react'
import { useDebouncedValue } from '@/shared/lib/use-debounced-value'

export function useSearchUsers() {
  const [query, setQuery] = useState('')

  const debouncedQuery = useDebouncedValue(query, 300)
  const normalizedQuery = debouncedQuery.trim()
  const shouldShowResults = normalizedQuery.length >= 2

  return {
    normalizedQuery,
    query,
    setQuery,
    shouldShowResults,
  }
}
