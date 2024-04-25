import { Code2, Monitor } from 'lucide-react'
import { useReducer } from 'react'
import techInfoReducer from '../utils/techInfoReducer'

const TechInfoSwitch = () => {
  const storageTechMode = localStorage.getItem('tech') === 'true'
  const [state, dispatch] = useReducer(techInfoReducer, storageTechMode || false)
  const classList = document.body.classList
  state ? classList.add('tech') : classList.remove('tech')

  return (
    <div
      onClick={() => dispatch({ type: 'action', payload: !state })}
      className="size-8 cursor-pointer text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100"
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
    </div>
  )
}

// export const showTechInfoContext = createContext(showTechInfo)

export default TechInfoSwitch
