import clsx from 'clsx'
import { HTMLAttributes, useContext } from 'react'
import { TechInfoContext, TechInfoContextType } from '../providers/TechInfoContextProvider'

const TimelineMarker = ({
  textStart = undefined,
  textEnd = undefined,
  className,
  absolute = true,
}: TimelineMarkerProps) => {
  const { techInfo } = useContext(TechInfoContext) as TechInfoContextType

  return (
    <div
      className={clsx(
        'z-50 w-full items-center gap-4 font-mono text-sm text-zinc-900  dark:text-zinc-100',
        className,
        absolute && ' absolute',
        techInfo ? 'flex' : 'hidden'
      )}
    >
      {textStart && (
        <span className="-mt-1.5 inline-block rounded bg-fuchsia-100/80 p-1 font-semibold dark:bg-fuchsia-600/20">
          {textStart}
        </span>
      )}
      <div className="h-px flex-1 border-t-2 border-dashed border-t-current opacity-90"></div>
      {textEnd && <span>{textEnd}</span>}
    </div>
  )
}

export type TimelineMarkerProps = {
  textStart?: string | undefined
  textEnd?: string | undefined
  absolute?: boolean
} & HTMLAttributes<HTMLDivElement>

export default TimelineMarker
