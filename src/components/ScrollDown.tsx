import { ArrowDown } from 'lucide-react'

const ScrollDown = () => {
  return (
    <div className="absolute z-[500] flex w-full justify-center p-4">
      <div className="flex w-fit gap-2 rounded-full bg-white/0 p-4 text-sm shadow-2xl backdrop-blur">
        <ArrowDown className="animate-bounce" /> Scroll Down
      </div>
    </div>
  )
}

export default ScrollDown
