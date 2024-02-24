import type { MetaFunction } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";
import Card from "~/components/card";
import Input from "~/components/input";
import supabase from "utils/supabase";

import naimtar from "public/assets/images/naimtar.png"
import keri from "public/assets/images/keri.png"
import haziq from "public/assets/images/haziq.png"
import azrilola from "public/assets/images/azrilola.jpg"
import naim from "public/assets/images/naim.png"
import Button from "~/components/button";

export const meta: MetaFunction = () => {
  return [
    { title: "Dosa Aksara" },
    { name: "description", content: "Built by naimroslan" },
  ];
};

export const loader = async () => {
  const { data, error } = await supabase.from('dosa').insert({ dosa: 'azril', keyword: 'azrul', user_id: 1}).select()
  return { data, error }
}

export default function Index() {
  const navigate = useNavigate()
  return (
    <div className="font-PressStart2P flex justify-center items-center h-screen" style={{ fontFamily: "", lineHeight: "1.8" }}>
      <div className="flex flex-col items-center space-y-10">
        <div className="text-4xl font-semibold text-[#121212]">
          Dosa Aksara
        </div>
        <div>
          <Input 
            placeholder = "nyatakan dosa"
          />
        </div>
        <div className="flex flex-row space-x-6">
          <Card 
            image={naimtar}
            pendosa="Naimq" 
          />
          <Card 
            image={keri}
            pendosa="Keri On" 
          />
          <Card 
            image={haziq}
            pendosa="Haziq Ahhh" 
          />
          <Card 
            image={azrilola}
            pendosa="Azrilola" 
          />
          <Card 
            image={naim}
            pendosa="Naim" 
          />
        </div>
        <div className="flex flex-row space-x-4">
          <Button 
            name="History"
            color="bg-[#e0bffe]"
            hoverColor="hover:bg-[#c9abe4]"
            onclick={() => navigate("/history")}
          />
          <Button 
            name="Submit"
            color="bg-[#A6FAFF]"
            hoverColor="hover:bg-[#79F7FF]"
            onclick={() => navigate("/history")}
          />
        </div>
      </div>
    </div>
  );
}
