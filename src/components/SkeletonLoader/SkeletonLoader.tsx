import clsx from 'clsx'
import { createElement, ElementType } from 'react'

export interface ISkeletonLoaderProps {
  className?: string
  as?: ElementType
}

const SkeletonSpan = <span>&zwnj;</span>

export const SkeletonLoader = ({
  className,
  as = 'span',
}: ISkeletonLoaderProps) =>
  createElement(
    as,
    {
      'aria-live': 'polite',
      className: clsx(
        'inline-block w-full animation-skeleton bg-black/10',
        className,
      ),
    },
    SkeletonSpan,
  )

export default SkeletonLoader
