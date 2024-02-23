import type { MetaFunction } from "@remix-run/node";
import Card from "~/components/card";

export const meta: MetaFunction = () => {
  return [
    { title: "Dosa Aksara" },
    { name: "description", content: "Built by naimroslan" },
  ];
};

export default function Index() {
  return (
    <div className="font-PressStart2P flex justify-center items-center h-screen" style={{ fontFamily: "", lineHeight: "1.8" }}>
      <div className="flex flex-col items-center space-y-10">
        <div className="text-4xl font-semibold text-[#121212]">
          Dosa Aksara
        </div>
        <div>
          <input className="w-96 border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#3fdba7] active:shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-md"
            placeholder="nyatakan dosa"
          />
        </div>
        <div className="flex flex-row space-x-6">
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
