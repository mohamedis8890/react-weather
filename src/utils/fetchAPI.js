import axios from "axios";

export const baseURL = "https://api.weatherapi.com/v1";

export const fetchData = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      key: "5a0f7a1d320d468aac9145106211712",
    },
  });

  return data;
};
