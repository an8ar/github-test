import { Skeleton } from '@/shared/components/ui/skeleton'

export function UserDetailsPageSkeleton() {
  return (
    <div className="rounded-[2rem] border border-border/70 bg-card/90 p-6 shadow-sm sm:p-8 lg:p-10">
      <div className="space-y-8">
        <div className="space-y-4">
          <Skeleton className="h-5 w-20 rounded-full" />
          <Skeleton className="h-12 w-56 rounded-full" />
          <Skeleton className="h-64 rounded-[2rem]" />
        </div>

        <div className="space-y-5 rounded-[2rem] border border-border/70 bg-card/70 p-6 sm:p-8">
          <div className="space-y-2">
            <Skeleton className="h-4 w-28 rounded-full" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-14" />
            <Skeleton className="h-14" />
            <Skeleton className="h-14" />
          </div>
        </div>
      </div>
    </div>
  )
}
