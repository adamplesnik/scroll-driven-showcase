import { LucideIcon } from 'lucide-react'
import Prism from 'prismjs'
import { HTMLAttributes, useEffect } from 'react'
import { addWithSpace } from '../utils/addWithSpace'
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
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <div
      className={
        'mb-4 hidden rounded-lg border border-zinc-300 bg-zinc-100 text-zinc-900 isTech:block dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300' +
        addWithSpace(className)
      }
      {...rest}
    >
      <code
        className={`language-${language} block overflow-y-auto whitespace-pre rounded-lg bg-transparent p-4 text-sm dark:text-zinc-300`}
      >
        {children}
      </code>
      {linkHref && (
        <div
          className={
            'flex items-center gap-2 border-t border-t-zinc-300 bg-zinc-200/10 px-2 py-2 text-xs sm:px-4 dark:border-t-slate-700 dark:bg-zinc-800/10 '
          }
        >
          {Icon && <Icon size={14} strokeWidth={2} className="flex-shrink-0" />}
          <Link href={linkHref} target={'_blank'} borderWidth={'narrow'}>
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
