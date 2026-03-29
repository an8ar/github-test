import { Skeleton } from '@/shared/components/ui/skeleton'
import { SearchUsersStatus } from './search-users-status'

export function SearchUsersResultsSkeleton() {
  return (
    <div className="space-y-3">
      <SearchUsersStatus statusText="Searching..." />
      <div className="space-y-2">
        <Skeleton className="h-16" />
        <Skeleton className="h-16" />
        <Skeleton className="h-16" />
      </div>
    </div>
  )
}
