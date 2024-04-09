import { useState } from "react";
import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import { Form, json, useActionData, useFetcher, useNavigate } from "@remix-run/react";
import toast, { Toaster } from "react-hot-toast"

import Card from "~/components/card";
import Input from "~/components/input";
import Button from "~/components/button";
import PendosaRadio from "~/components/radio/pendosa";

import naimtar from "public/assets/images/naimtar.webp"
import keri from "public/assets/images/keri.webp"
import haziq from "public/assets/images/haziq.webp"
import azrilola from "public/assets/images/azrilola.webp"
import naim from "public/assets/images/naim.webp"

export const meta: MetaFunction = () => {
  return [
    { title: "Dosa Aksara" },
    { name: "description", content: "Built by naimroslan" },
  ];
};

export default function Index() {
  const navigate = useNavigate()

  const [selectedId, setIsSelectedId] = useState(null)
  const addNewDosaForm = useFetcher()
  const [formDataState, setFormDataState] = useState({
    dosa: '',
    keyword: '',
    pendosa: ''
  })

  const handleRadioClick = (id) => {
    setIsSelectedId(id)
    setFormDataState({ ...formDataState, pendosa: id})
  }

  const handleChange = (e:any) => {
    const { name, value, type, checked } = e.target

    if (type === 'radio') {
      if (checked) {
        setIsSelectedId(value)
      }
    } else {
      setFormDataState({ ...formDataState, [name]: value })
    }
  }

  const handleSubmit = async (e:any) => {
    e.preventDefault()

    const dosaPayload = {
      dosa: formDataState.dosa,
      keyword: formDataState.keyword,
      pendosa: formDataState.pendosa
    }

    const dataToActionFetcherVer = {
      dosaForm: JSON.stringify(dosaPayload),
      source: 'index'
    }

    try {
      addNewDosaForm.submit(dataToActionFetcherVer, { method: "post", action: "/action/sendNewDosaResponse" })
      toast.success("Added new dosa!")
      // Delay navigation by 1 second
      setTimeout(() => {
        navigate("/view")
      }, 1000);
    } catch (err) {
      toast.error("Failed to add new Dosa!")
      console.error("Error: ", err)
    }
  }

  return (
    <div className="font-PressStart2P flex justify-center items-center h-screen" style={{ fontFamily: "", lineHeight: "1.8" }}>
      <div>
        <Toaster />
      </div>
      <Form>
        <div className="flex flex-col items-center space-y-10">
          <div className="text-4xl font-semibold text-[#121212]">
            Dosa Aksara
          </div>
            <div>
                <Input 
                  placeholder = "nyatakan dosa eg. tarak"
                  bgcolor="focus:bg-[#FFA6F6]"
                  name="dosa"
                  value={formDataState.dosa}
                  onChange={handleChange}
                />
            </div>
            <div>
              <Input 
                placeholder = "yang sebernarnya? eg. tayar"
                bgcolor="focus:bg-[#ACFC89]"
                name="keyword"
                value={formDataState.keyword}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-row space-x-6">
              <PendosaRadio 
                id="1"
                image={azrilola}
                pendosa="Azrilola"
                isSelected={selectedId === "1"}
                handleChange={handleRadioClick}
                handleRadioClick={handleRadioClick}
              />
              <PendosaRadio 
                id="2"
                image={haziq}
                pendosa="Haziq"
                isSelected={selectedId === "2"}
                handleChange={handleRadioClick}
                handleRadioClick={handleRadioClick}
              />
              <PendosaRadio 
                id="3"
                image={keri}
                pendosa="Keri"
                isSelected={selectedId === "3"}
                handleChange={handleRadioClick}
                handleRadioClick={handleRadioClick}
              />
              <PendosaRadio 
                id="4"
                image={naimtar}
                pendosa="Naimtar"
                isSelected={selectedId === "4"}
                handleChange={handleRadioClick}
                handleRadioClick={handleRadioClick}
              />
              <PendosaRadio 
                id="5"
                image={naim}
                pendosa="Naim"
                isSelected={selectedId === "5"}
                handleChange={handleRadioClick}
                handleRadioClick={handleRadioClick}
              />
            </div>
            <div className="flex flex-row space-x-4">
              <Button 
                name="View All"
                color="bg-[#e0bffe]"
                hoverColor="hover:bg-[#c9abe4]"
                onclick={() => navigate("/view")}
              />
              <Button
                type=""
                name="Submit"
                color="bg-[#A6FAFF]"
                hoverColor="hover:bg-[#79F7FF]"
                onclick={handleSubmit}
              />
            </div>
        </div>
      </Form>
    </div>
  );
}
