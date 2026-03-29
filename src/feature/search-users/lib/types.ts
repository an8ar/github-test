import type { InfiniteData } from '@tanstack/react-query'
import type { GithubUsersSearchPage } from '@/entity/user'

export type SearchUsersStatusParams = {
  isInitialLoading: boolean
  shouldShowResults: boolean
  usersCount: number
}

export type SearchGithubUsersPages = InfiniteData<GithubUsersSearchPage>
