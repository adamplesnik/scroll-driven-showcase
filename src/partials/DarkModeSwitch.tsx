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
      className="size-8 cursor-pointer overflow-hidden rounded-full transition-transform hover:scale-105"
      onClick={switchMode}
    >
      <div
        className={
          'ease-line flex flex-col transition-[margin] delay-150 duration-500' +
          (darkMode ? ' -mt-8' : '')
        }
      >
        <Sun className="size-8 p-1" />
        <Moon className="size-8 p-1" />
      </div>
    </div>
  )
}

export interface ModeSwitchProps {
  mode: string
  onClick: MouseEventHandler
}

export default DarkModeSwitch
