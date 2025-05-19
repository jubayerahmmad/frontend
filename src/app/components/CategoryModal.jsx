"use client";

import { Loader2 } from "lucide-react";
import { useState } from "react";

const CategoryModal = ({ isCategoryModalOpen }) => {
  const [loading, setLoading] = useState(false);
  const handleSave = async (e) => {
    // setLoading(true);
    console.log(e);
    const form = e.target;

    const category = form.category.value;
    console.log(category);

    setIsModalOpen(false);
    // setLoading(false);
  };
  return (
    <div
      className={`${
        isCategoryModalOpen ? "scale-[1] opacity-100" : "scale-[0] opacity-0"
      } w-full h-screen fixed top-0 left-0 z-[200000000] bg-[#000000c4] flex items-center justify-center transition-all duration-300`}
    >
      <div className="w-full max-w-md bg-gray-100/20 backdrop-blur-xl rounded-xl p-6 shadow-xl border border-gray-100/50">
        <div className="text-center mb-6">
          <h2 className="text-white text-xl font-medium">Add Category</h2>
        </div>

        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <input
              type="text"
              name="category"
              placeholder="Add Food Category"
              className="w-full bg-gray-700/20 border border-gray-100/50 text-white placeholder-gray-400 px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500/50"
              required
            />
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

export default CategoryModal;
