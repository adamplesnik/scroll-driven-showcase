import { HTMLAttributes } from 'react'
import { addWithSpace } from '../../utils/addWithSpace'
import PlayButton from './PlayButton'

const Header = ({ className }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={'flex w-auto flex-col' + addWithSpace(className)}>
      <div className="flex items-center">
        <h1 className="flex-1 truncate text-3xl font-medium text-zinc-900 dark:text-zinc-100">
          Kind of Blue
        </h1>
        <PlayButton />
      </div>
      <h2 className="truncate text-2xl font-medium">Miles Davis</h2>
      <div className="my-4 flex items-center gap-1 text-xs">
        <span className="font-medium">1959</span>
        <span>•</span>
        <span>jazz</span>
      </div>
    </div>
  )
}

export default Header
