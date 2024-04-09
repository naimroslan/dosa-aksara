import axios from "axios";
import apiConfig from "~/config/apiConfig";

enum DosaApi {
  addDosa = '/addDosa',
  getDosa = '/getDosa'
}

interface AddDosaProps {
  dosa: string;
  keyword: string;
  pendosa: string;
}

interface GetDosaProps {
  dosa: string;
  keyword: string;
  pendosa: string;
}

export const addDosa = async ({
  dosa, keyword, pendosa
}: AddDosaProps) => {
  try {
    const response = await axios.post(`${apiConfig.dosa_api}${DosaApi.addDosa}`,
    {
      dosa: dosa,
      keyword: keyword,
      pendosa: pendosa
    })
    return response
  } catch (err) {
    console.log(err)
  }
}

export const getDosa = async ({
  dosa, keyword, pendosa
}: GetDosaProps) => {
  try {
    const response = await axios.post(`${apiConfig.dosa_api}${DosaApi.getDosa}`,
    {
      dosa: dosa,
      keyword: keyword,
      pendosa: pendosa
    })
    return response
  } catch (err) {
    console.log(err)
  }
}