import axios from "axios";

export const baseURL = "https://weatherapi-com.p.rapidapi.com/";

export const fetchData = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
      "x-rapidapi-key": "af6d416defmsha8f396089175dacp198702jsn5a6a598c6962",
    },
  });

  return data;
};
