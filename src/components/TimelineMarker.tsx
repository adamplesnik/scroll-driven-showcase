import { HTMLAttributes } from 'react'
import { addWithSpace } from '../utils/addWithSpace'

const TimelineMarker = ({
  textStart = undefined,
  textEnd = undefined,
  className,
}: TimelineMarkerProps) => {
  return (
    <div
      className={
        'isTech:flex -mx-4 hidden items-center gap-4 font-mono text-sm text-zinc-900 sm:-mx-8 md:-mx-14 dark:text-zinc-100' +
        addWithSpace(className)
      }
    >
      {textStart && <span className="font-semibold">{textStart}</span>}
      <div className="h-px flex-1 border-t border-dashed border-t-current opacity-70"></div>
      {textEnd && <span>{textEnd}</span>}
    </div>
  )
}

export type TimelineMarkerProps = {
  textStart?: string | undefined
  textEnd?: string | undefined
} & HTMLAttributes<HTMLDivElement>

export default TimelineMarker
