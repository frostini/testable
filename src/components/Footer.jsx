import { GridPattern } from '@/components/GridPattern'

export function Footer() {
  return (
    <footer className="relative pt-5 pb-5 sm:pb-8 sm:pt-14">
      <div className="relative text-center text-sm text-slate-600">
        <p>Copyright &copy; {new Date().getFullYear()} Perfect Personal Statement, LLC</p>
        <p>All rights reserved.</p>
      </div>
      <div className="z-50 flex justify-between text-center text-sm text-slate-600 px-5">
        <a href='/terms' target="_blank">Terms of Use</a>
        <a href='/disclaimer' target="_blank">Disclaimer</a>
      </div>
    </footer>
  )
}
