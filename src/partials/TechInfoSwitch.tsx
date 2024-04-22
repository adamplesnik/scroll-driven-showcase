import { Code2, Monitor } from 'lucide-react'
import { useState } from 'react'

const TechInfoSwitch = () => {
  const [showTechInfo, setShowTechInfo] = useState(false)

  return (
    <div onClick={() => setShowTechInfo(!showTechInfo)} className="cursor-pointer">
      <Monitor
        className={
          'size-6 p-0.5 transition-opacity' + (showTechInfo ? ' opacity-0' : ' opacity-100')
        }
        strokeWidth={2}
      />
      <Code2
        className={
          'size-6 p-0.5 transition-opacity' + (!showTechInfo ? ' opacity-0' : ' opacity-100')
        }
        strokeWidth={2}
      />
    </div>
  )
}

// export const showTechInfoContext = createContext(showTechInfo)

export default TechInfoSwitch
