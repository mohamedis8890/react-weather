import axios from "axios";

export const baseURL = "https://api.weatherapi.com/v1";

export const fetchData = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      key: process.env.REACT_APP_WEATHER_API_KEY,
    },
  });

  return data;
};
