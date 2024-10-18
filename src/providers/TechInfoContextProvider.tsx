import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react'

export type TechInfoContextType = {
  techInfo: boolean
  setTechInfo: Dispatch<SetStateAction<boolean>>
}

const storageTechMode = localStorage.getItem('tech') === 'true'

export const TechInfoContext = createContext<TechInfoContextType | null>(null)

const TechInfoContextProvider = ({ children }: PropsWithChildren) => {
  const [techInfo, setTechInfo] = useState(storageTechMode || false)
  useEffect(() => {
    localStorage.setItem('tech', techInfo.toString())
  }, [techInfo])

  return (
    <TechInfoContext.Provider value={{ techInfo, setTechInfo }}>
      {children}
    </TechInfoContext.Provider>
  )
}

export default TechInfoContextProvider
