import { Button } from '@/components/Button'

export function Book ({title = "Medicine"}) {
  return (
      <div className="book box-border h-96 lg:h-160">
        <div className="flex-col justify-end h-full">
          <div className="title p-12 text-center">
            <h2 className=" py-4 text-4xl text-white font-perfect  border ">
            <span className="font-brand font-light block">the</span>
            <span className="font-brand font-light block">PERFECT</span>
            <span className="font-perfect block font-extrabold">Personal</span>
            <span className="font-brand font-light block">STATEMENT</span>
            </h2>
            <p className="mt-2 mr-4 text-white font-brand text-right uppercase">{title}</p>
          </div>
        </div>
      </div>
  )
}