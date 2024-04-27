import { Code2, Monitor } from 'lucide-react'
import { useReducer } from 'react'
import { Tooltip } from 'react-tooltip'
import techInfoReducer from '../utils/techInfoReducer'

const TechInfoSwitch = () => {
  const storageTechMode = localStorage.getItem('tech') === 'true'
  const [state, dispatch] = useReducer(techInfoReducer, storageTechMode || false)
  const classList = document.body.classList
  state ? classList.add('tech') : classList.remove('tech')

  const tooltipContent = state ? 'Hide code and guides' : 'Show code and guides'

  return (
    <div
      onClick={() => dispatch({ type: 'action', payload: !state })}
      className="size-8 cursor-pointer text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100"
      data-tooltip-id="tooltip"
      data-tooltip-content={tooltipContent}
      data-tooltip-place="bottom"
      data-tooltip-delay-show={150}
      data-tooltip-offset={12}
    >
      <Monitor
        className={
          'absolute size-8 p-1 transition-[transform,opacity] delay-150 duration-300 ease-line' +
          (state ? ' -rotate-180 opacity-0' : ' opacity-100')
        }
        strokeWidth={'1.2'}
      />
      <Code2
        className={
          'absolute size-8 p-1 transition-[transform,opacity] delay-150 duration-300 ease-line' +
          (!state ? ' rotate-180 opacity-0' : ' opacity-100')
        }
        strokeWidth={'1.2'}
      />
      <Tooltip id="tooltip" className="!rounded-md !bg-zinc-600 !text-xs shadow-lg" />
    </div>
  )
}

// export const showTechInfoContext = createContext(showTechInfo)

export default TechInfoSwitch
