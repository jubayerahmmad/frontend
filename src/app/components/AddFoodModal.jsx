"use client";
import { imgUpload } from "@/utils";
import axios from "axios";
import { Loader2, Upload } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const AddFoodModal = ({ isModalOpen, setIsModalOpen }) => {
  const [imageFile, setImageFile] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    console.log(file);
    setImageFile(file);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(e);
    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const imageURL = await imgUpload(imageFile);
    const data = { name, category, image: imageURL };

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/foods/add`,
        data
      );
      console.log(response);
      toast.success("Data saved Successfully");
    } catch (error) {
      toast.error(error.message || "Failed to save");
    } finally {
      setIsModalOpen(false);
      setLoading(false);
    }
  };

  return (
    <div
      className={`${
        isModalOpen ? "scale-[1] opacity-100" : "scale-[0] opacity-0"
      } w-full h-screen fixed top-0 left-0 z-[200000000] bg-[#000000c4] flex items-center justify-center transition-all duration-300`}
    >
      <div className="w-full max-w-md bg-gray-100/20 backdrop-blur-xl rounded-xl p-6 shadow-xl border border-gray-100/50">
        <div className="text-center mb-6">
          <h2 className="text-white text-xl font-medium">Add Food</h2>
        </div>

        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Food Name"
              className="w-full bg-gray-700/20 border border-gray-100/50 text-white placeholder-gray-400 px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500/50"
              required
            />
          </div>

          <div>
            <input
              type="text"
              name="category"
              placeholder="Food Category"
              className="w-full bg-gray-700/20 border border-gray-100/50 text-white placeholder-gray-400 px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500/50"
              required
            />
          </div>

          <div className="relative">
            <label className="w-full flex items-center justify-center bg-gray-700/40 hover:bg-gray-700/60 text-gray-300 border border-dashed border-red-500/60 rounded-full px-4 py-2 transition duration-200 cursor-pointer">
              <Upload className="mr-2 h-5 w-5" />
              <span>
                {imageFile === ""
                  ? `Upload or Drag image here`
                  : `${
                      imageFile?.name.length < 15
                        ? imageFile?.name
                        : `${imageFile?.name.slice(0, 15)}...${
                            imageFile?.type.split("/")[1]
                          }`
                    }`}
              </span>
              <input
                type="file"
                name="image"
                id="imageFile"
                className="hidden"
                onChange={handleFileChange}
                required
              />
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-700 text-white font-medium py-2 rounded-full transition duration-200 cursor-pointer"
            >
              {loading ? (
                <span className="flex items-center gap-2 justify-center">
                  <Loader2 className="animate-spin" /> Saving...
                </span>
              ) : (
                "Save"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFoodModal;
