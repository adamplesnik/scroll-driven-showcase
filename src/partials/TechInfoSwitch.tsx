import { Code2, Monitor } from 'lucide-react'
import { useReducer } from 'react'
import techInfoReducer from '../utils/techInfoReducer'

const TechInfoSwitch = () => {
  const [state, dispatch] = useReducer(techInfoReducer, false)

  return (
    <div onClick={() => dispatch({ type: 'action', payload: !state })} className="cursor-pointer">
      <Monitor
        className={'size-6 p-0.5 transition-opacity' + (state ? ' opacity-0' : ' opacity-100')}
        strokeWidth={2}
      />
      <Code2
        className={'size-6 p-0.5 transition-opacity' + (!state ? ' opacity-0' : ' opacity-100')}
        strokeWidth={2}
      />
    </div>
  )
}

// export const showTechInfoContext = createContext(showTechInfo)

export default TechInfoSwitch
