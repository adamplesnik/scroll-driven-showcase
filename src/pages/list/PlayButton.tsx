import { CirclePause, CirclePlay } from 'lucide-react'
import { useReducer } from 'react'
import playActionReducer from './playReducer'

const PlayButton = () => {
  const [state, dispatch] = useReducer(playActionReducer, false)

  return (
    <button
      onClick={() => dispatch({ type: 'playAction', payload: state })}
      type="button"
      className="duration-400 flex size-10 cursor-pointer rounded-lg bg-cyan-600 p-2 text-white transition-transform ease-line hover:scale-110"
    >
      <CirclePlay
        className={
          'absolute transition-[transform,opacity] duration-300 ease-line ' +
          (state ? 'rotate-90 opacity-0' : 'opacity-100')
        }
      />
      <CirclePause
        className={
          'absolute transition-[transform,opacity] duration-300 ease-line ' +
          (state ? 'opacity-100' : 'opacity-0')
        }
      />
    </button>
  )
}

export default PlayButton
