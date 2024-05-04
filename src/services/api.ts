import axios from "axios";
import { ImageData } from "../App.types";

const ACCESSKEY = '5Z-_8iNGawk-enCI3-LHMdLN0jAr9dD1GQwkeaZ-dh8';



//Створюємо свій варіант аксіо
const instance = axios.create({
  baseURL: "https://api.unsplash.com",
});

export const requestProductsByQuery: (query: string, per_page: number, page: number) => Promise<any> = async (
    query = "",
    per_page = 12,
    page = 1
  ) => {
    const { data }:ImageData = await instance.get(
      `/search/photos?client_id=${ACCESSKEY}&query=${query}&per_page=${per_page}&page=${page}`
    );
    
    // console.log('data', data);
    

    return data;
  };
  