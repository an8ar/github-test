export function formatRepositoryCount(value: number) {
  return new Intl.NumberFormat('en-US').format(value)
}
