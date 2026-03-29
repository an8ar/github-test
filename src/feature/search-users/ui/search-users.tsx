import { Suspense } from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/shared/components/ui/input'
import { useSearchUsers } from '../model/use-search-users'
import { SearchUsersPrompt } from './search-users-prompt'
import { SearchUsersResults } from './search-users-results'
import { SearchUsersResultsSkeleton } from './search-users-results-skeleton'

export function SearchUsers() {
  const { query, setQuery, normalizedQuery, shouldShowResults } = useSearchUsers()

  return (
    <div className="space-y-3">
      <div className="relative">
        <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          className="h-12 rounded-2xl border-border/70 bg-background pl-10 text-sm shadow-sm"
          onChange={(event) => {
            setQuery(event.target.value)
          }}
          placeholder="Search users"
          value={query}
        />
      </div>

      {!shouldShowResults && <SearchUsersPrompt />}

      {shouldShowResults && (
        <Suspense fallback={<SearchUsersResultsSkeleton />}>
          <SearchUsersResults normalizedQuery={normalizedQuery} onSelect={() => setQuery('')} />
        </Suspense>
      )}
    </div>
  )
}
