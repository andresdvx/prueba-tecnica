import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD,
  api_key: process.env.APIKEY,
  api_secret: process.env.APISECRET
});

const uploadPicture = async (path) => {
  return await cloudinary.uploader.upload(path, {
    folder: "prueba",
  });
};
export  default uploadPicture;