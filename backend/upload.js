import multer from 'multer'
import path from 'path'
import { v4 } from 'uuid'
import fs from 'fs/promises'


export const uploadDirectory = "./uploader";


const checkIfDirectoryExists = async () => {
  try {
    await fs.stat(uploadDirectory);
  } catch (err) {
    if (err.code === "ENOENT") {
      await fs.mkdir(uploadDirectory);
    }
  }
};
const storage = multer.diskStorage({
  async destination(req, file, callback) {
    try {
      await checkIfDirectoryExists();
      callback(null, uploadDirectory);
    } catch (err) {
      callback(err);
    }
  },

  async filename(req, file, callback) {
    const fileExtension = path.extname(file.originalname);
    const fileName = `${v4()}${fileExtension}`;
    callback(null, fileName);
  },
})

export const uploader = multer({ storage });

export const getUploadedFiles = async () => {
  return await fs.readdir(uploadDirectory);
};

export const findUploadedFiles = async (fileName) => {
  const info = await fs.stat(path.resolve(uploadDirectory, fileName));
};




