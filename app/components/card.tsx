import { useState } from "react"

export default function Card({ pendosa, image, onclick }: any) {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected)
  }

  return(
    <div className="w-52 h-full border-black border-2 rounded-md hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white">
      <a href="" className="block cursor-pointer" onClick={onclick}>
        <article className="w-full h-full">
            <figure className="w-full h-1/2 border-black border-b-2">
              <img
                  src={image}
                  alt="thumbnail"
                  className="w-52 h-52 object-cover"
                  />
            </figure>
            <div className="px-6 py-5 text-left h-full">
              <p className="text-base whitespace-nowrap mb-4">{pendosa}</p>
            </div>
        </article>
      </a>
    </div>
  )
}