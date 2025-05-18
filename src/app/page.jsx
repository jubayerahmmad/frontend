import Footer from "./sections/Footer";
import HeroSection from "./sections/Hero";
import Navbar from "./sections/Navbar";
import ProductsSection from "./sections/ProductsSection";
import TeamSection from "./sections/TeamSection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default Home;
