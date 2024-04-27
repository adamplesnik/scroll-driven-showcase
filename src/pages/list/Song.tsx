import { HTMLAttributes } from 'react'
import { addWithSpace } from '../../utils/addWithSpace'

const Song = ({ title, length, order = 0, className, ...rest }: SongType) => {
  return (
    <div className={'flex items-center gap-2' + addWithSpace(className)} {...rest}>
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
