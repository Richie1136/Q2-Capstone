import axios from 'axios'

export const URL_BASE_URL = "http://localhost:4000"

const axiosInstance = axios.create({
  baseURL: URL_BASE_URL,
});

export default axiosInstance;
export const fetchPics = async () => {
  const { data } = await axiosInstance.get("/user", {
    params: {
      size: 500000
    },
  })
  return data;
};

export const uploadPic = async data => {
  const formData = new FormData();
  formData.append("file", data)
  await axiosInstance.post("/user", formData)
};