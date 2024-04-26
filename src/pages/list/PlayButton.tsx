import { CirclePlay, CirclePause } from 'lucide-react'
import { useState } from 'react'

const PlayButton = () => {
  const [play, setPlay] = useState(false)

  return (
    <button
      onClick={() => setPlay(!play)}
      type="button"
      className="duration-400 flex size-10 cursor-pointer rounded-lg bg-sky-600 p-2 text-white transition-transform ease-line hover:scale-110"
    >
      <CirclePlay
        className={
          'absolute transition-[transform,opacity] duration-300 ease-line ' +
          (play ? 'rotate-90 opacity-0' : 'opacity-100')
        }
      />
      <CirclePause
        className={
          'absolute transition-[transform,opacity] duration-300 ease-line ' +
          (play ? 'opacity-100' : 'opacity-0')
        }
      />
    </button>
  )
}

export default PlayButton
