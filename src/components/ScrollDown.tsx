import { ArrowDown } from 'lucide-react'

const ScrollDown = () => {
  return (
    <div className="absolute z-40 flex w-full justify-center gap-2 p-8 pt-24 text-sm font-medium">
      <ArrowDown className="size-5 animate-bounce" /> Scroll Down
    </div>
  )
}

export default ScrollDown
