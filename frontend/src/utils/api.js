import axios from "axios";
import { uniqueUser } from "../components/Input";

const url = "http://localhost:4000";

export const addTolibrary = async (data) => {
  axios.post(`${url}/library`, data);
};

export const libraryStorage = async () => {
  const library = await fetch(`${url}/library`);
  return library;
};

export const register = async (data) => {
  axios.post(`${url}/signup`, data);
};

export const getUser = async (email) => {
  const emailData = await axios.get(`${url}/login/${email}`);
  return emailData.data;
};
