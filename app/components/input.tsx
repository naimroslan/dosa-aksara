import React from "react"

export default function Input({ placeholder, bgcolor, name, value, onChange }: any) {
  return(
    <input 
      className={`w-[500px] border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] ${bgcolor} active:shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-md`}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  )
}