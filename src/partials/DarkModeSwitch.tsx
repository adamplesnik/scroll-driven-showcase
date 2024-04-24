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
      className="h-16 w-8 cursor-pointer overflow-hidden py-4 text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100"
      onClick={switchMode}
    >
      <div
        className={
          'flex flex-col items-center justify-center gap-6 transition-[margin] delay-150 duration-300 ease-line' +
          (darkMode ? ' mt-1' : ' -mt-11')
        }
      >
        <Moon strokeWidth={'1.5'} />
        <Sun strokeWidth={'1.5'} />
      </div>
    </div>
  )
}

export interface ModeSwitchProps {
  mode: string
  onClick: MouseEventHandler
}

export default DarkModeSwitch
