import axios from 'axios'

export const URL_BASE_URL = "http://localhost:4000"

const axiosInstance = axios.create({
  baseURL: URL_BASE_URL,
});

export default axiosInstance;
export const fetchPics = async () => {
  const { data } = await axiosInstance.get("/user")
  return data;
};

export const uploadPic = async data => {
  console.log({ data })
  throw new Error("oops")
}