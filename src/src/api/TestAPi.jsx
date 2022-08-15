import axios from "axios";

export const getTest = async () => {
  const test = await axios.get("https://openapi.naver.com/v1/search/news");
  return test.data;
};
