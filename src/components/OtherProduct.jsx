export function OtherProduct ({
  title
}) {
  return (
    <div className="relative h-48 w-full overflow-hidden">
      <div className="product h-48 absolute w-5/6">
      <div className="flex-col justify-end h-full">
          <div className="title px-10 py-5 text-center">
            <h2 className=" text-xl text-white font-perfect  border ">
            <span className="font-brand font-light block">the</span>
            <span className="font-brand font-light block">PERFECT</span>
            <span className="font-perfect block font-extrabold">Personal</span>
            <span className="font-brand font-light block">STATEMENT</span>
            </h2>
            <p className="mt-2 mr-4 text-white font-brand text-right uppercase">{title}</p>
          </div>
        </div>
      </div>
    </div>
  )
}