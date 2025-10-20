import axios from "axios";

export const deleteImage = async (deleteToken: string) => {
  const formData = new FormData();
  formData.append("token", deleteToken);

  try {
    await axios.post(
      `https://api.cloudinary.com/v1_1/${
        import.meta.env.VITE_CLOUD_NAME
      }/delete_by_token`,
      formData
    );
  } catch (error) {
    console.error("Failed to delete temporary image.", error);
  }
};
