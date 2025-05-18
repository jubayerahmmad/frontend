"use client";
import { Upload, X } from "lucide-react";
import { useState } from "react";

const AddFoodModal = ({ isModalOpen, setIsModalOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    image: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    console.log("Saving food item:", formData);
    setIsModalOpen(false);
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

        <div className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Food Name"
              className="w-full bg-gray-700/20 border border-gray-100/50 text-white placeholder-gray-400 px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500/50"
            />
          </div>

          <div>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              placeholder="Food Category"
              className="w-full bg-gray-700/20 border border-gray-100/50 text-white placeholder-gray-400 px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500/50"
            />
          </div>

          <div className="relative">
            <label className="w-full flex items-center justify-center bg-gray-700/40 hover:bg-gray-700/60 text-gray-300 border border-dashed border-red-500/60 rounded-full px-4 py-2 transition duration-200 cursor-pointer">
              <Upload className="mr-2 h-5 w-5" />
              <span>Upload or Drag image here</span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setFormData({
                      ...formData,
                      image: e.target.files[0],
                    });
                  }
                }}
              />
            </label>
          </div>

          <div>
            <button
              type="button"
              onClick={handleSave}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 rounded-full transition duration-200"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFoodModal;
