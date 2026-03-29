import { useEffect } from 'react'

type UseInfiniteScrollParams = {
  canLoadMore: boolean
  isLoadingMore: boolean
  onLoadMore: () => void
  targetRef: React.RefObject<HTMLDivElement | null>
}

export function useInfiniteScroll({
  canLoadMore,
  isLoadingMore,
  onLoadMore,
  targetRef,
}: UseInfiniteScrollParams) {
  useEffect(() => {
    const target = targetRef.current

    if (!target || !canLoadMore || isLoadingMore) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries

        if (entry?.isIntersecting) {
          onLoadMore()
        }
      },
      {
        rootMargin: '160px',
      },
    )

    observer.observe(target)

    return () => observer.disconnect()
  }, [canLoadMore, isLoadingMore, onLoadMore, targetRef])
}
