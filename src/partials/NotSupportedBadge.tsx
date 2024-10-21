import { Asterisk } from 'lucide-react'
import { Tooltip } from 'react-tooltip'

const NotSupportedBadge = () => {
  return (
    <>
      <div
        className="-ml-4 hidden -rotate-6 rounded-full bg-yellow-600 px-2 py-1 text-xs text-white no-animations:block"
        data-tooltip-id="notSupportedTooltip"
      >
        <Asterisk size={18} />
      </div>
      <Tooltip
        id="notSupportedTooltip"
        className="z-20 max-w-80 !rounded-md !bg-zinc-700 !text-sm shadow-lg"
      >
        Your browser does not support{' '}
        <span className="font-medium">scroll-driven CSS animations.</span> Use Chrome 115+, or check
        Can I use for further info.
      </Tooltip>
    </>
  )
}

export default NotSupportedBadge
