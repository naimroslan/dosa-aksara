import { Link } from "@remix-run/react";

export default function Button({ name, color, hoverColor, onclick, type }: any) {
  return(
    <button
     className={`h-12 border-black border-2 p-2.5 ${color} ${hoverColor} hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] rounded-md`}
     onClick={onclick}
     type={type}
     >
      {name}
     </button>
  )
}