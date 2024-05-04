import axios from "axios";

const ACCESSKEY = '5Z-_8iNGawk-enCI3-LHMdLN0jAr9dD1GQwkeaZ-dh8';

//Створюємо свій варіант аксіо
const instance = axios.create({
  baseURL: "https://api.unsplash.com",
});

export const requestProductsByQuery = async (
    query = "",
    per_page = 12,
    page = 1
  ) => {
    const { data } = await instance.get(
      `/search/photos?client_id=${ACCESSKEY}&query=${query}&per_page=${per_page}&page=${page}`
    );
  
    return data;
  };
  