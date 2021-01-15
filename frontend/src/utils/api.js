import axios from "axios";
import { v4 } from "uuid";

const url = "http://localhost:4000";

//switch url for deployment
export const addTolibrary = async (data) => {
  axios.post(`${url}/library`, data);
};

export const libraryStorage = async () => {
  const library = await fetch(`${url}/library`);
  return library;
};
