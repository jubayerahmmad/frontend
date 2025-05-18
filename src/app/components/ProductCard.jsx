import { Star, StarIcon } from "lucide-react";
import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="shadow-md rounded-b-2xl">
      <div>
        <Image
          src="https://i.ibb.co/1G1VygfQ/cards1.png"
          alt="cards"
          className="w-full object-cover"
          width={400}
          height={300}
        />
      </div>
      <div className="p-2 md:p-4 space-y-3">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-base md:text-xl">Chicken</h1>
          <p className="px-1.5 py-1 md:px-3 md:py-1.5 bg-[#F03328] text-white text-sm md:text-base font-semibold rounded-full">
            Breakfast
          </p>
        </div>
        <div className="flex justify-between items-center">
          {/* ratings */}
          <div className="flex items-center">
            <Star fill="#FF9E0C" className="text-[#FF9E0C]" size={16} />
            <Star fill="#FF9E0C" className="text-[#FF9E0C]" size={16} />
            <Star fill="#FF9E0C" className="text-[#FF9E0C]" size={16} />
            <Star fill="#FF9E0C" className="text-[#FF9E0C]" size={16} />
            <Star fill="#FF9E0C" className="text-[#FF9E0C]" size={16} />
          </div>
          <p className="font-bold text-black text-sm md:text-xl">$230</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
