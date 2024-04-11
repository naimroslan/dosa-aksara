import axios from "axios";
import apiConfig from "~/config/apiConfig";

enum DosaApi {
  addDosa = '/addDosa',
  getDosa = '/getDosa'
}

interface AddDosaProps {
  dosa: string;
  keyword: string;
  user_id: string;
}

interface GetDosaProps {
  dosa: string;
  keyword: string;
  user_id: string;
}

export const addDosa = async ({
  dosa, keyword, user_id
}: AddDosaProps) => {
  try {
    const response = await axios.post(`${apiConfig.dosa_api}${DosaApi.addDosa}`,
    {
      dosa: dosa,
      keyword: keyword,
      user_id: user_id
    })
    return response
  } catch (err) {
    console.log(err)
  }
}

// export const getDosa = async ({
//   dosa, keyword, user_id
// }: GetDosaProps) => {
//   try {
//     const response = await axios.post(`${apiConfig.dosa_api}${DosaApi.getDosa}`,
//     {
//       dosa: dosa,
//       keyword: keyword,
//       user_id: user_id
//     })
//     return response
//   } catch (err) {
//     console.log(err)
//   }
// }

export const getDosa = async () => {
  try {
    const response = await axios.get(`${apiConfig.dosa_api}${DosaApi.getDosa}`);
    return response.data;
  } catch (err) {
    console.log(err)
  }
}