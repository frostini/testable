export function Product ({name = "Pers", price}) {
  return (
    <div className="relative h-48 w-full overflow-hidden">

    
      <div className="product h-48 absolute w-full">
        <div className="p-4 flex flex-col justify-between h-full pr-5">
          <h2 className=" pt-4 text-left text-lg text-white font-brand uppercase font-bold ">{name}
          </h2>
          <h2 className=" pb-4 pr-4 text-left text-xl text-white font-brand">{price}
          </h2>
        </div>
      </div>
      </div>
  )
}