const BASE_URL = `https://res.cloudinary.com/${
  import.meta.env.VITE_CLOUD_NAME
}/image/upload/`;

export const generateCloudinaryUrl = (
  name: string,
  imageId: string
): string => {
  const uppercaseName = name.toUpperCase();

  const imageOverlay = `l_${imageId}/c_fill,w_400,h_400,g_center,y_8,fl_layer_apply/`;

  const textOverlay = `l_text:arial_30:${encodeURIComponent(
    uppercaseName
  )},co_rgb:000000,g_south,y_130,fl_layer_apply/`;

  return `${BASE_URL}${imageOverlay}${textOverlay}${
    import.meta.env.VITE_BASE_IMAGE_PUBLIC_ID
  }`;
};
