import axios from "axios";

const uploadImage = async (temporaryImage: File) => {
  const formData = new FormData();
  formData.append("file", temporaryImage);
  formData.append("upload_preset", import.meta.env.VITE_PRESET_NAME);

  const response = await axios.post(
    `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/upload`,
    formData
  );

  const { public_id: publicId, delete_token: deleteToken } = response.data;
  return { publicId, deleteToken };
};

export default uploadImage;
