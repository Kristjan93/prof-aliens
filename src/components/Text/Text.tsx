import clsx from 'clsx'
import { createElement, ElementType, ReactNode } from 'react'

export interface ITextProps {
  /**
   * Type of element to render.
   */
  as?: ElementType
  /**
   * Predefined text appearance.
   */
  variant?: keyof typeof variants
  children?: ReactNode
  className?: string
}

const sizes: Record<keyof typeof variants, string> = /*tw*/ {
  /**
   * Define mobile and desktop text sizes
   */
  h1: 'text-42/50 md:text-42/50',
  h2: 'text-20/24 md:text-20/24',
  h3: 'text-16/19 md:text-16/19',
  p: ' text-14/14 md:text-14/14',
  emp: 'text-14/17 md:text-14/17',
  inp: 'text-20/24 md:text-20/24',
  btn: 'text-16/19 md:text-16/19',
}

export type GetTextStylesProps = Pick<ITextProps, 'variant'>

const variants = /*tw*/ {
  h1: 'font-bold',
  h2: 'font-bold',
  h3: 'font-bold',
  p: '',
  emp: ' underline font-bold',
  inp: '',
  btn: 'font-bold',
}

export const getTextStyles = (
  { variant = 'p' }: GetTextStylesProps,
  className = '',
) => clsx(sizes[variant], variants[variant], className)

export const Text = ({
  as = 'p',
  className,
  variant,
  ...restProps
}: ITextProps) =>
  createElement(as, {
    className: getTextStyles({ variant }, className),
    ...restProps,
  })

export default Text
