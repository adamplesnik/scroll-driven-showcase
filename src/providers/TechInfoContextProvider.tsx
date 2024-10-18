import { Dispatch, PropsWithChildren, SetStateAction, createContext, useState } from 'react'

export type TechInfoContextType = {
  techInfo: boolean
  setTechInfo: Dispatch<SetStateAction<boolean>>
}

export const TechInfoContext = createContext<TechInfoContextType | null>(null)

const TechInfoContextProvider = ({ children }: PropsWithChildren) => {
  const [techInfo, setTechInfo] = useState(false)

  return (
    <TechInfoContext.Provider value={{ techInfo, setTechInfo }}>
      {children}
    </TechInfoContext.Provider>
  )
}

export default TechInfoContextProvider
