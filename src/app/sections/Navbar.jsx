import { Search } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="absolute w-full flex justify-between items-center px-6 md:px-12 py-4 text-white bg-transparent font-semibold z-50">
      {/* Logo Text */}
      <h1 className="hidden lg:block text-3xl tracking-wide">RESTAURANT</h1>

      {/* Search Bar */}
      <div className="flex items-center gap-6 bg-white px-6 py-3 rounded-xl w-full lg:w-[500px]">
        <Search size={18} className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search...."
          className="bg-transparent outline-none text-sm text-black w-full"
        />
      </div>
    </nav>
  );
};

export default Navbar;
