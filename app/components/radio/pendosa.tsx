import { useState } from "react";

import Card from "../card";

import naimtar from "public/assets/images/naimtar.webp"
import keri from "public/assets/images/keri.webp"
import haziq from "public/assets/images/haziq.webp"
import azrilola from "public/assets/images/azrilola.webp"
import naim from "public/assets/images/naim.webp"

export default function PendosaRadio({ handleRadioClick, id, image, pendosa, isSelected, handleChange }: any) {


  return(
    <div className="flex flex-row space-x-4">
      <div 
        className={`w-52 h-full border-black border-2 rounded-md ${isSelected ? 'shadow-[8px_8px_0px_rgba(0,0,0,1)]' : ''} bg-white`}
        onClick={() => handleRadioClick(id)}
      >
        <input 
          id={`radio${id}`} 
          type="radio" 
          className="hidden" 
          checked={isSelected} 
          onChange={handleChange} 
          name="pendosa"
          value={id}
        />
        <article className="w-full h-full">
            <figure className="w-full h-3/4 border-black border-b-2">
              <img
                src={image}
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="flex justify-center mt-8">
              <p className="text-base whitespace-nowrap mb-4">{pendosa}</p>
            </div>
        </article>
      </div>
    </div>
  )
}