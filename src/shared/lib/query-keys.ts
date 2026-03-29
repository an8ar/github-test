export const queryKeys = {
  githubUsers: {
    all: ['github-users'] as const,
    details: (login: string) => [...queryKeys.githubUsers.all, 'details', login] as const,
    search: (query: string) => [...queryKeys.githubUsers.all, 'search', query] as const,
  },
  userRepositories: {
    all: ['user-repositories'] as const,
    list: (login: string, page: number, order: 'asc' | 'desc') =>
      [...queryKeys.userRepositories.all, login, page, order] as const,
  },
}
