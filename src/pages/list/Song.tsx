import clsx from 'clsx'
import { HTMLAttributes } from 'react'

const Song = ({ title, length, order = 0, className, ...rest }: SongType) => {
  return (
    <div className={clsx('flex items-center gap-2', className)} {...rest}>
      <span className="text-sm opacity-60">{order}</span>
      <span className="flex-1">{title}</span>
      <span className="text-sm opacity-60">{length}</span>
    </div>
  )
}

export type SongType = {
  title: string
  length: string
  order?: number
} & HTMLAttributes<HTMLDivElement>

export default Song
