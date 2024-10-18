import { Code2, Monitor } from 'lucide-react'
import { useContext } from 'react'
import { Tooltip } from 'react-tooltip'
import { TechInfoContext, TechInfoContextType } from '../providers/TechInfoContextProvider'

const TechInfoSwitch = () => {
  const storageTechMode = localStorage.getItem('tech') === 'true'
  const { techInfo, setTechInfo } = useContext(TechInfoContext) as TechInfoContextType

  const tooltipContent = techInfo ? 'Hide code and guides' : 'Show code and guides'

  return (
    <div
      onClick={() => setTechInfo(!techInfo)}
      className="relative size-8 cursor-pointer text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100"
      data-tooltip-id="tooltip"
      data-tooltip-content={tooltipContent}
      data-tooltip-place="bottom"
      data-tooltip-delay-show={150}
      data-tooltip-offset={12}
    >
      <Monitor
        className={
          'absolute left-1 top-1 size-6 p-0.5 transition-[transform,opacity] delay-150 duration-300 ease-line' +
          (techInfo ? ' -rotate-180 opacity-0' : ' opacity-100')
        }
        strokeWidth={'1.5'}
      />
      <Code2
        className={
          'absolute left-1 top-1 size-6 p-0.5 transition-[transform,opacity] delay-150 duration-300 ease-line' +
          (!techInfo ? ' rotate-180 opacity-0' : ' opacity-100')
        }
        strokeWidth={'1.5'}
      />
      <Tooltip id="tooltip" className="!rounded-md !bg-zinc-600 !text-xs shadow-lg" />
    </div>
  )
}

// export const showTechInfoContext = createContext(showTechInfo)

export default TechInfoSwitch
