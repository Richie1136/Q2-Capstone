import axios from "axios";

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
  // console.log(email);
  const emailData = await axios.get(`${url}/login/${email}`);
  // console.log(emailData.data);
  return emailData.data;
};

//useSelector hook           send obj with 2 properties: userID and dinoStats
