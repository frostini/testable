// new component file
export function InlineCode({ content }) {
  return (
      <span className="bg-slate-100 dark:bg-slate-700 px-0.5 rounded ">
          <code className="font-mono font-medium text-sky-600 dark:text-sky-300">{content}</code>
      </span>
  )
}