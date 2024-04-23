import { HTMLAttributes } from 'react'
import { addWithSpace } from '../utils/addWithSpace'

const TimelineMarker = ({
  textStart = undefined,
  textEnd = undefined,
  className,
}: TimelineMarkerProps) => {
  return (
    <div className={'-mx-16 flex items-center gap-4' + addWithSpace(className)}>
      {textStart && <span className="font-mono text-sm font-semibold">{textStart}</span>}
      <div className="h-px flex-1 border-t border-dashed border-t-current opacity-70"></div>
      {textEnd && <span className="font-mono text-sm">{textEnd}</span>}
    </div>
  )
}

export type TimelineMarkerProps = {
  textStart?: string | undefined
  textEnd?: string | undefined
} & HTMLAttributes<HTMLDivElement>

export default TimelineMarker
