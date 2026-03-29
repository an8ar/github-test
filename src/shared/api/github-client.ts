import { fetchJson } from './base'
import type { GithubUser, GithubUserRepositoriesPage, GithubUsersSearchPage } from '@/entity/user'

const GITHUB_API_BASE_URL = 'https://api.github.com'

export class GitHubClient {
  async fetchUser(login: string): Promise<GithubUser> {
    return fetchJson<GithubUser>(`${GITHUB_API_BASE_URL}/users/${login}`)
  }

  async searchUsers(query: string, page: number, perPage: number): Promise<GithubUsersSearchPage> {
    const searchParams = new URLSearchParams({
      page: String(page),
      per_page: String(perPage),
      q: query,
    })

    return fetchJson<GithubUsersSearchPage>(
      `${GITHUB_API_BASE_URL}/search/users?${searchParams.toString()}`,
    )
  }

  async fetchUserRepositories(
    login: string,
    page: number,
    perPage: number,
    order: 'asc' | 'desc',
  ): Promise<GithubUserRepositoriesPage> {
    const searchParams = new URLSearchParams({
      order,
      page: String(page),
      per_page: String(perPage),
      q: `user:${login}`,
      sort: 'stars',
    })

    return fetchJson<GithubUserRepositoriesPage>(
      `${GITHUB_API_BASE_URL}/search/repositories?${searchParams.toString()}`,
    )
  }
}

export const gitHubClient = new GitHubClient()
