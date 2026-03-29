import type { GithubUserSearchItem } from '@/entity/user'

export type SearchUsersResultsProps = {
  normalizedQuery: string
  onRestoreComplete: () => void
  query: string
  selectedUser: string
}

export type SearchUsersRowProps = {
  index: number
  query: string
  user: GithubUserSearchItem
}

export type SearchUsersStatusProps = {
  statusText: string
}
