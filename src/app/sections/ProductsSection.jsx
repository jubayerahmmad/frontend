"use client";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import AddFoodModal from "../components/AddFoodModal";

const ProductsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="pt-16 lg:pt-28 pb-6 px-6">
      <div className="container mx-auto">
        {/* Headings */}
        <div className="text-center space-y-2 mb-3">
          <h1 className="text-3xl lg:text-6xl font-bold">
            Our best Seller Dishes
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Our fresh garden salad is a light and refreshing option. It features
            a mix of crisp lettuce, juicy tomatoe all tossed in your choice of
            dressing.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-center md:justify-between items-center flex-wrap gap-4">
          {/* category */}
          <div className="flex flex-wrap justify-center items-center gap-3">
            <button
              type="button"
              className={`rounded-full cursor-pointer px-3 py-1.5 border border-gray-500/40 font-semibold`}
            >
              All
            </button>
            <button
              type="button"
              className={`rounded-full cursor-pointer px-3 py-1.5 border border-gray-500/40 font-semibold`}
            >
              Breakfast
            </button>
            <button
              type="button"
              className={`rounded-full cursor-pointer px-3 py-1.5 border border-gray-500/40 font-semibold`}
            >
              Lunch
            </button>
            <button
              type="button"
              className={`rounded-full cursor-pointer px-3 py-1.5 border border-gray-500/40 font-semibold`}
            >
              Dinner
            </button>
          </div>
          {/* actions btn */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              type="button"
              className={`rounded-full cursor-pointer px-3 py-1.5 text-white bg-[#2C2C2C] font-semibold`}
            >
              Add Food
            </button>
            <button
              type="button"
              className={`rounded-full cursor-pointer px-3 py-1.5 text-white bg-[#2C2C2C] font-semibold`}
            >
              Add Category
            </button>
          </div>
        </div>

        {/* cards */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 py-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      {isModalOpen && (
        <AddFoodModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </section>
  );
};

export default ProductsSection;
