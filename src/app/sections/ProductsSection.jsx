"use client";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import AddFoodModal from "../components/AddFoodModal";
import axios from "axios";
import CategoryModal from "../components/CategoryModal";
import { toast } from "sonner";
import { ChevronDown, ChevronUp } from "lucide-react";

const ProductsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState("All");
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios(`${process.env.NEXT_PUBLIC_API_URL}/foods`);
      setProducts(data);
    };

    getProducts();
  }, [setProducts]);

  useEffect(() => {
    const getCategories = async () => {
      const { data } = await axios(
        `${process.env.NEXT_PUBLIC_API_URL}/category`
      );
      setCategories(data);
    };

    getCategories();
  }, [setCategories]);

  const handleFilterCategory = async (category) => {
    try {
      const { data } = await axios(
        `${process.env.NEXT_PUBLIC_API_URL}/foods?category=${category}`
      );
      setProducts(data);
    } catch (error) {
      toast.error(error.message || "Error");
    }
  };

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
              onClick={() => {
                setActive("All");
                handleFilterCategory("");
              }}
              className={`rounded-full cursor-pointer px-3 py-1.5 ${
                active === "All"
                  ? "text-white bg-[#2C2C2C]"
                  : "border border-gray-500/40"
              } font-semibold`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category._id}
                type="button"
                onClick={() => {
                  setActive(category?.category);
                  handleFilterCategory(category?.category);
                }}
                className={`rounded-full cursor-pointer px-3 py-1.5 ${
                  active === category.category
                    ? "text-white bg-[#2C2C2C]"
                    : "border border-gray-500/40"
                } font-semibold`}
              >
                {category?.category}
              </button>
            ))}
          </div>
          {/* action btns */}
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
        {products.length > 0 ? (
          <>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 py-4">
              {showMore ? (
                <>
                  {products?.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
                </>
              ) : (
                <>
                  {products?.slice(0, 6).map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
                </>
              )}
            </div>
            {products.length > 6 && (
              <div className="flex justify-center">
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="font-semibold bg-gray-700 text-gray-100 mx-auto px-3 py-1.5 rounded-2xl border border-gray-600 cursor-pointer"
                >
                  {showMore ? (
                    <span className="flex items-center gap-2">
                      <ChevronUp /> Show Less
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <ChevronDown /> Show More
                    </span>
                  )}
                </button>
              </div>
            )}
          </>
        ) : (
          <p className="text-4xl font-bold text-center p-12">
            No Products Available in this Category
          </p>
        )}
      </div>
      {isModalOpen && (
        <AddFoodModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          setProducts={setProducts}
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
