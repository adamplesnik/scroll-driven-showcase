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
      className="h-16 w-8 cursor-pointer overflow-hidden py-4 text-zinc-600 transition-colors duration-200 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100"
      onClick={switchMode}
    >
      <div
        className={
          'flex flex-col gap-4 transition-[margin] delay-150 duration-500' +
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
