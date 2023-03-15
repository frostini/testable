export function Product ({name = "Pers", price}) {
  return (
    <div className="relative h-48 w-full overflow-hidden">

    
      <div className="product h-48 absolute w-full">
        <div className="p-4 flex flex-col justify-between h-full">
          <h2 className=" py-4 text-left text-xl text-white font-brand uppercase font-bold ">{name}
          </h2>
          <h2 className=" py-4 pr-4 text-right text-xl text-white font-brand">{price}
          </h2>
        </div>
      </div>
      </div>
  )
}