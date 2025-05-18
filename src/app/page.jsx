import Footer from "./sections/Footer";
import HeroSection from "./sections/Hero";
import Navbar from "./sections/Navbar";
import ProductsSection from "./sections/ProductsSection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <Footer />
    </div>
  );
};

export default Home;
