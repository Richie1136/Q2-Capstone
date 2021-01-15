import path from "path";
import fs from "fs/promises";

export const uploadDirectory = "http://localhost:4000/library";

export const findUploadedFile = async (fileName) => {
  const info = await fs.stat(path.resolve(uploadDirectory, fileName));
  return info;
};
