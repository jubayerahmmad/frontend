"use client";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import AddFoodModal from "../components/AddFoodModal";
import axios from "axios";
import CategoryModal from "../components/CategoryModal";

const ProductsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios(`${process.env.NEXT_PUBLIC_API_URL}`);
      setProducts(data);
    };

    getProducts();
  }, []);
  console.log(products);
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
              onClick={() => setIsCategoryModalOpen(true)}
              type="button"
              className={`rounded-full cursor-pointer px-3 py-1.5 text-white bg-[#2C2C2C] font-semibold`}
            >
              Add Category
            </button>
          </div>
        </div>

        {/* cards */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 py-4">
          {products?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
      {isModalOpen && (
        <AddFoodModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
      {isCategoryModalOpen && (
        <CategoryModal
          isCategoryModalOpen={isCategoryModalOpen}
          setIsCategoryModalOpen={setIsCategoryModalOpen}
        />
      )}
    </section>
  );
};

export default ProductsSection;
