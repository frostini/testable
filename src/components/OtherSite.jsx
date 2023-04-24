import { Button } from '@/components/Button'

export function OtherSite ({
  title,
  textColor,
  themeColor,
  callToAction,
  path
}) {
  return (
    <div className=" h-auto">
      <div className="h-auto flex">
        <div className="flex-col">
          <div className="title px-10 py-5 text-center">
            <h2 className=" text-xl font-perfect  border px-20">
            <span className="font-brand font-light block">the</span>
            <span className="font-brand font-light block">PERFECT</span>
            <span className="font-perfect block font-extrabold">Personal</span>
            <span className="font-brand font-light block">STATEMENT</span>
            </h2>
            <p className={`mt-2 mr-4 ${textColor} font-brand font-bold text-right uppercase`}>{title}</p>
          </div>
          <div className="flex justify-center">
            <Button href={path} color={'slate'}>
              {callToAction}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}