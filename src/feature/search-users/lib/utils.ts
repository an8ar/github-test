import type { SearchGithubUsersPages, SearchUsersStatusParams } from './types'

export function getSearchUsersStatusText({
  isInitialLoading,
  shouldShowResults,
  usersCount,
}: SearchUsersStatusParams) {
  if (!shouldShowResults) {
    return 'Type at least 2 characters'
  }

  if (isInitialLoading) {
    return 'Searching...'
  }

  if (!usersCount) {
    return 'No matches'
  }

  return `${usersCount} ${getUsersMatchLabel(usersCount)}`
}

export function getUsersFromPages(data?: SearchGithubUsersPages) {
  return data?.pages.flatMap((page) => page.items) ?? []
}

function getUsersMatchLabel(usersCount: number) {
  return usersCount === 1 ? 'match' : 'matches'
}
