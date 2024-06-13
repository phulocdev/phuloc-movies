interface Props {
  quantitySkeleton: number
}

export default function FilmListSkeleton({ quantitySkeleton }: Props) {
  return (
    <div className='grid grid-cols-12 gap-x-4'>
      {Array(quantitySkeleton)
        .fill(0)
        .map((_, index) => (
          <article key={index} className='col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2'>
            <div className='relative h-72 w-full animate-pulse overflow-hidden rounded-md bg-neutral-300 dark:bg-black'></div>
          </article>
        ))}
    </div>
  )
}
