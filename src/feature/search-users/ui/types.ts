import type { GithubUserSearchItem } from '@/entity/user'

export type SearchUsersResultsProps = {
  normalizedQuery: string
  onSelect: () => void
}

export type SearchUsersRowProps = {
  index: number
  onSelect: () => void
  user: GithubUserSearchItem
}

export type SearchUsersStatusProps = {
  statusText: string
}
