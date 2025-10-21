import { useState } from "react";

import FlyerForm from "./components/FlyerForm";
import { downloadImage } from "../utils/downloadImage";
import DownloadIcon from "./components/DownloadIcon";
import type { Flyer } from "../type";
import toast from "react-hot-toast";

import flyer from "../assets/flyer.jpg";

export default function FlyerGenerator() {
  const [flyerInfo, setFlyerInfo] = useState<Flyer>();
  const [isLoading, setIsLoading] = useState(false);

  const [status, setStatus] = useState("🎉 Create a flyer");

  const onSubmit = (data: Flyer) => {
    toast.success("🎉 Flyer is ready");
    setFlyerInfo(data);
    setIsLoading(false);
    setStatus("🎉 Create a new flyer!");
  };

  const onStatusChange = (message: string) => {
    setStatus(message);
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen p-8 py-20">
      <header>
        <h1 className="text-3xl font-bold text-center mb-6 text-yellow-400">
          {import.meta.env.VITE_PAGE_TITLE || "Display Picture Generator"}
        </h1>
      </header>
      <main>
        <div className=" text-white  rounded-2xl shadow-2xl md:flex justify-center items-center gap-10 w-11/12  max-w-7xl  mx-auto">
          <FlyerForm
            onSubmit={onSubmit}
            onStatusChange={onStatusChange}
            isLoading={isLoading}
            status={status}
          />
          <div className="mt-8 text-center">
            <div className="bg-gray-900 border border-yellow-500 rounded-lg  max-w-96 mx-auto">
              {!isLoading && flyerInfo?.url ? (
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={flyerInfo.url || flyer}
                    alt="Birthday Flyer"
                    className="w-full"
                  />
                  <button
                    onClick={() =>
                      downloadImage({
                        url: flyerInfo.url,
                        name: flyerInfo.name,
                        deleteToken: flyerInfo.deleteToken,
                        onSuccess: (message) => toast.success(message),
                      })
                    }
                    className="absolute top-2 right-2 p-2 cursor-pointer rounded-full bg-gray-900 "
                  >
                    <DownloadIcon />
                  </button>
                </div>
              ) : (
                <div className=" px-10 md:px-20 w-full max-w-96 h-96 flex justify-center items-center text-center text-gray-400">
                  <p>Your flyer will appear here</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
