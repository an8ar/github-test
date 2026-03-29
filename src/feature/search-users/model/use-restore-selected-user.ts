import { useEffect } from 'react'
import { getSearchUserElementId } from '../lib/utils'

type UseRestoreSelectedUserParams = {
  canLoadMore: boolean
  isLoadingMore: boolean
  onLoadMore: () => void
  onRestoreComplete: () => void
  selectedUser: string
}

export function useRestoreSelectedUser({
  canLoadMore,
  isLoadingMore,
  onLoadMore,
  onRestoreComplete,
  selectedUser,
}: UseRestoreSelectedUserParams) {
  useEffect(() => {
    if (!selectedUser) {
      return
    }

    const selectedUserElement = document.getElementById(getSearchUserElementId(selectedUser))

    if (selectedUserElement) {
      selectedUserElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
      onRestoreComplete()
      return
    }

    if (canLoadMore && !isLoadingMore) {
      onLoadMore()
      return
    }

    if (!canLoadMore && !isLoadingMore) {
      onRestoreComplete()
    }
  }, [canLoadMore, isLoadingMore, onLoadMore, onRestoreComplete, selectedUser])
}
