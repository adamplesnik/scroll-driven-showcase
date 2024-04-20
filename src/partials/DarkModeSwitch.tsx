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
      className="flex size-8 cursor-pointer flex-col overflow-hidden rounded-full transition-colors hover:bg-white/40 dark:hover:bg-slate-500/60"
      onClick={switchMode}
    >
      <div className="group flex flex-col">
        <Sun className="ease-line size-8 p-1 transition-transform duration-700 group-hover:rotate-[22deg]" />
        <Moon className="ease-line size-8 p-1 transition-transform duration-700 group-hover:-rotate-[22deg]" />
      </div>
    </div>
  )
}

export interface ModeSwitchProps {
  mode: string
  onClick: MouseEventHandler
}

export default DarkModeSwitch
