import { HTMLAttributes } from 'react'

const Song = ({ title, length, order = 0 }: SongType) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm opacity-60">{order}</span>
      <span className="flex-1">{title}</span>
      {length}
    </div>
  )
}

export type SongType = {
  title: string
  length: string
  order?: number
} & HTMLAttributes<HTMLDivElement>

export default Song
