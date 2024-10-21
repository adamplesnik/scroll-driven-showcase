import clsx from 'clsx'
import { HTMLAttributes, PropsWithChildren } from 'react'

const Paragraph = ({ children, className = '' }: HTMLAttributes<HTMLParagraphElement>) => {
  return <p className={clsx('mb-4 w-full leading-6', className)}>{children}</p>
}

export interface ParagraphProps {
  children: PropsWithChildren
  className?: string
}

export default Paragraph
