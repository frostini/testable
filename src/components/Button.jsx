import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'inline-flex justify-center rounded-md py-1 px-4 text-base font-semibold tracking-tight shadow-sm focus:outline-none',
  outline:
    'inline-flex justify-center rounded-md border py-[calc(theme(spacing.1)-1px)] px-[calc(theme(spacing.4)-1px)] text-base font-semibold tracking-tight focus:outline-none',
}

const variantStyles = {
  solid: {
    slate:
      'bg-slate-900 text-white hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 active:bg-slate-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-slate-900',
    blue: 'bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-blue-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-blue-600',
    red: 'bg-red-600 text-white hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 active:bg-red-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-red-600',
    gold: 'bg-amber-600 text-white hover:bg-amber-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 active:bg-amber-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-amber-600',
    green: 'bg-emerald-600 text-white hover:bg-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 active:bg-emerald-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-emerald-600',
    whiteBlue:
      'bg-white text-blue-600 hover:text-blue-700 focus-visible:text-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-blue-50 active:text-blue-900/80 disabled:opacity-40 disabled:hover:text-blue-600',
      whiteRed:
      'bg-white text-red-600 hover:text-red-700 focus-visible:text-red-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-red-50 active:text-red-900/80 disabled:opacity-40 disabled:hover:text-red-600',
      whiteGreen:
      'bg-white text-emerald-600 hover:text-emerald-700 focus-visible:text-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-emerald-50 active:text-emerald-900/80 disabled:opacity-40 disabled:hover:text-emerald-600',
      whiteGold:
      'bg-white text-amber-600 hover:text-amber-700 focus-visible:text-amber-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-amber-50 active:text-amber-900/80 disabled:opacity-40 disabled:hover:text-amber-600',
  },
  outline: {
    slate:
      'border-slate-200 text-slate-900 hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 active:border-slate-200 active:bg-slate-50 active:text-slate-900/70 disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:bg-transparent',
    blue: 'border-blue-300 text-blue-600 hover:border-blue-400 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:text-blue-600/70 disabled:opacity-40 disabled:hover:border-blue-300 disabled:hover:bg-transparent',
    red: 'border-red-300 text-red-600 hover:border-red-400 hover:bg-red-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 active:text-red-600/70 disabled:opacity-40 disabled:hover:border-red-300 disabled:hover:bg-transparent',
  },
}

export function Button({
  variant = 'solid',
  color = 'slate',
  className,
  href,
  ...props
}) {
  className = clsx(
    baseStyles[variant],
    variantStyles[variant][color],
    className
  )

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  )
}
