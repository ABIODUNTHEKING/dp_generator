import { deleteImage } from "./deleteImage";

interface DownloadImage {
  url: string;
  name: string;
  deleteToken?: string;
  onError?: (message: string) => void;
  onSuccess?: (message: string) => void;
}

export const downloadImage = async ({
  url,
  name,
  deleteToken,
  onError,
  onSuccess,
}: DownloadImage) => {
  try {
    const request = await fetch(url);
    const blob = await request.blob();
    const downloadUrl = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = `${name}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    if (onSuccess) {
      onSuccess("Image downloaded");
    }
    
    if (deleteToken) {
      deleteImage(deleteToken);
    }
  } catch (error) {
    const downloadError = error as { message: string };
    if (onError) {
      onError(downloadError.message || "Failed to download image");
    }
  }
};
