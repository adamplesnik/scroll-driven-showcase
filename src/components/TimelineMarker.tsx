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
        'absolute z-40 hidden w-full items-center gap-4 font-mono text-sm text-zinc-900 isTech:flex dark:text-zinc-100' +
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
