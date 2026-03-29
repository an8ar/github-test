export const QUERY_TIME = {
  defaultGcTime: 10 * 60_000,
  defaultStaleTime: 60_000,
  searchUsersGcTime: 2 * 60_000,
  searchUsersStaleTime: 30_000,
  userGcTime: 30 * 60_000,
  userRepositoriesGcTime: 15 * 60_000,
  userRepositoriesStaleTime: 2 * 60_000,
  userStaleTime: 5 * 60_000,
} as const
