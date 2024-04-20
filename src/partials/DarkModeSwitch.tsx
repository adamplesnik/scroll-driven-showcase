import { Moon, Sun } from 'lucide-react'
import { MouseEventHandler, useState } from 'react'

const DarkModeSwitch = () => {
  const systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
  const storageModeDark = localStorage.getItem('mode') === 'dark'
  const [darkMode, setDarkMode] = useState(storageModeDark || systemDarkMode ? true : false)
  const classList = document.documentElement.classList
  darkMode ? classList.add('dark') : classList.remove('dark')

  const switchMode = () => {
    localStorage.setItem('mode', darkMode ? 'light' : 'dark')
    setDarkMode(!darkMode)
  }

  return (
    <div
      className="h-16 w-8 cursor-pointer overflow-hidden py-4 transition-transform duration-200 hover:scale-125"
      onClick={switchMode}
    >
      <div
        className={
          'ease-line flex flex-col gap-4 transition-[margin] delay-150 duration-500' +
          (darkMode ? ' -mt-12' : '')
        }
      >
        <Sun className="size-8 p-1" strokeWidth={1.7} />
        <Moon className="size-8 p-1" strokeWidth={1.7} />
      </div>
    </div>
  )
}

export interface ModeSwitchProps {
  mode: string
  onClick: MouseEventHandler
}

export default DarkModeSwitch
