import clsx from 'clsx'
import { LucideIcon } from 'lucide-react'
import Prism from 'prismjs'
import { HTMLAttributes, useContext, useEffect } from 'react'
import { TechInfoContext, TechInfoContextType } from '../providers/TechInfoContextProvider'
import Link from './Link'

const CodeBlock = ({
  children,
  className,
  Icon = undefined,
  language = 'javascript',
  linkHref = '',
  linkText = '',
  ...rest
}: CodeProps) => {
  const { techInfo } = useContext(TechInfoContext) as TechInfoContextType

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <div
      className={clsx(
        'mb-4 rounded-lg border border-zinc-300 bg-gray-200/70 text-zinc-900 backdrop-blur transition-[transform,opacity] delay-150 dark:border-zinc-700 dark:bg-gray-800/80 dark:text-zinc-300',
        techInfo ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0',
        className
      )}
      {...rest}
    >
      <code
        className={`language-${language} block overflow-y-auto whitespace-pre rounded-lg bg-transparent p-4 text-sm dark:text-zinc-300`}
      >
        {children}
      </code>
      {linkHref && (
        <div className="flex items-center gap-2 border-t border-t-slate-400/30 px-2 py-2 text-xs sm:px-4">
          {Icon && <Icon size={14} strokeWidth={2} className="flex-shrink-0" />}
          <Link href={linkHref} target={'_blank'}>
            {linkText ? linkText : linkHref}
          </Link>
        </div>
      )}
    </div>
  )
}

export type CodeProps = {
  Icon?: LucideIcon | undefined
  language?: 'javascript' | 'css' | 'html' | 'bash'
  linkHref?: string | undefined
  linkText?: string | undefined
} & HTMLAttributes<HTMLDivElement>

export default CodeBlock
