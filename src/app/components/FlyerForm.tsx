import { useForm } from "react-hook-form";
import { generateCloudinaryUrl } from "../../utils/generateCloudinaryUrl";
import uploadImage from "../../utils/uploadImage";
import type { Flyer } from "../../type";

type FormValues = {
  name: string;
  file: FileList;
};

interface IFlyerFormProps {
  onSubmit: (data: Flyer) => void;
  onStatusChange: (status: string) => void;
  status: string;
  isLoading: boolean;
}

function FlyerForm({
  onSubmit,
  onStatusChange,
  status,
  isLoading,
}: IFlyerFormProps) {
  const { register, handleSubmit, reset } = useForm<FormValues>();

  const onFormSubmit = async (data: FormValues) => {
    try {
      onStatusChange("Uploading Image");
      const { publicId, deleteToken } = await uploadImage(data.file[0]);

      onStatusChange("Generating Flyer");
      const url = generateCloudinaryUrl(data.name, publicId);

      const img = new Image();
      img.onload = () => {
        onSubmit({ name: data.name, url, deleteToken });
        reset();
      };
      img.onerror = () => {
        onStatusChange("❌ Error generating flyer.");
      };
      img.src = url;
    } catch {
      onStatusChange(
        "❌ Upload failed. Please check network or Cloudinary preset."
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className="space-y-6 bg-gray-800 p-6 rounded-xl border border-gray-700 z max-w-96 md:w-6/12 lg:w-10/12 mx-auto md:mx-0"
    >
      <div>
        <label className="block text-yellow-300 font-semibold mb-2">
          Full Name
        </label>
        <input
          type="text"
          {...register("name", { required: true })}
          placeholder="Enter celebrant's name"
          className="w-full p-3 rounded-md bg-gray-900 border border-yellow-500 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      <div>
        <label className="block text-yellow-300 font-semibold mb-2">
          Upload Photo
        </label>
        <input
          type="file"
          accept="image/*"
          {...register("file", { required: true })}
          className="w-full text-sm text-gray-200 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-yellow-500 file:text-black hover:file:bg-yellow-400"
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-lg shadow-lg transition-all duration-200 disabled:opacity-10 disabled:cursor-not-allowed"
      >
        {status}
      </button>
    </form>
  );
}

export default FlyerForm;
