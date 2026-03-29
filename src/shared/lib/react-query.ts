import { QueryClient } from '@tanstack/react-query'
import { QUERY_TIME } from '@/shared/constants/query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: QUERY_TIME.defaultGcTime,
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: QUERY_TIME.defaultStaleTime,
    },
  },
})
