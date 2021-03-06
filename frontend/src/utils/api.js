import axios from "axios";

const url = "http://localhost:4000";
// "https://ark-stats.herokuapp.com/"; //switch url for deployment
export const addTolibrary = async (data) => {
  axios.post(`${url}/library`, data);
};

export const uploadTolibrary = async () => {
  try {
    const { data } = await axios.get(`${url}/library`);
  } catch (err) {
    console.log("failed");
  }
};

export const libraryStorage = () => {
  fetch("");
};

// const axiosInstance = axios.create({
//   baseURL: api_baseURL,
// });
// export default axiosInstance;
// export const fetchPhotos = async () => {
//   const { data } = await axiosInstance.get("/photos", {});
//   return data;
// };
// export const uploadPhoto = async (data) => {
//   const formData = new FormData();
//   formData.append("photo", data);
//   await axiosInstance.post("/uploads", formData);
// };

// export const photoSize = async (photoId) => {
//   const response = await axiosInstance.get(`${photoId}`, {});
//   const data = response.data;
//   return data.size;
// };
