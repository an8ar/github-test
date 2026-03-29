import type { Endpoints } from '@octokit/types'

export type GithubUserListItem = Endpoints['GET /users']['response']['data'][number]

export type GithubUser = Endpoints['GET /users/{username}']['response']['data']

export type GithubUserSearchItem =
  Endpoints['GET /search/users']['response']['data']['items'][number]

export type GithubUsersSearchPage = {
  items: GithubUserSearchItem[]
  total_count: number
}

export type GithubUserRepository =
  Endpoints['GET /users/{username}/repos']['response']['data'][number]

export type GithubRepositorySearchItem =
  Endpoints['GET /search/repositories']['response']['data']['items'][number]

export type GithubUserRepositoriesPage = {
  items: GithubRepositorySearchItem[]
  total_count: number
}
