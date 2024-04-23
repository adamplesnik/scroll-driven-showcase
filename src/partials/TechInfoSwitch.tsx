import { Code2, Monitor } from 'lucide-react'
import { useReducer } from 'react'
import techInfoReducer from '../utils/techInfoReducer'

const TechInfoSwitch = () => {
  const [state, dispatch] = useReducer(techInfoReducer, false)
  const classList = document.body.classList
  state ? classList.add('tech') : classList.remove('tech')

  return (
    <div onClick={() => dispatch({ type: 'action', payload: !state })} className="cursor-pointer">
      <Monitor
        className={'size-8 p-1 transition-opacity' + (state ? ' opacity-0' : ' opacity-100')}
        strokeWidth={'1.5'}
      />
      <Code2
        className={'size-8 p-1 transition-opacity' + (!state ? ' opacity-0' : ' opacity-100')}
        strokeWidth={'1.5'}
      />
    </div>
  )
}

// export const showTechInfoContext = createContext(showTechInfo)

export default TechInfoSwitch
