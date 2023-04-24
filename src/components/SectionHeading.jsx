import clsx from 'clsx'
import { componentThemeConfig } from '@/lib'

export function SectionHeading({ number, componentThemeColor = "blue", children, className, ...props }) {
  const themedConfig = componentThemeConfig[componentThemeColor]

  return (
    <h2
      className={clsx(
        className,
        `inline-flex items-center rounded-full py-1 px-4 ${themedConfig['text-color']} ring-1 ring-inset ${themedConfig['ring-color']}`
      )}
      {...props}
    >
      { number &&
        <span className="font-mono text-sm" aria-hidden="true">
          {number.padStart(2, '0')}
        </span>
      }
      <span className={`ml-3 h-3.5 w-px ${themedConfig['background-color-trans']}`} />
      <span className="ml-3 text-base font-medium tracking-tight">
        {children}
      </span>
    </h2>
  )
}
