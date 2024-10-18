import clsx from 'clsx'

const ChartColumn = ({ className = '' }: ChartColumnProps) => {
  return (
    <div className="relative flex h-full w-4 items-end bg-gray-200/50 dark:bg-gray-800/50">
      <div
        className={clsx(
          'h-0 w-full animate-to-height-full rounded-t-full bg-gradient-to-tr from-cyan-300 to-indigo-300/50 timeline/chart range-on-entry/60px_400px no-animations:h-full dark:from-zinc-400 dark:to-zinc-500',
          className
        )}
      ></div>
    </div>
  )
}

export interface ChartColumnProps {
  className?: string
}

export default ChartColumn
