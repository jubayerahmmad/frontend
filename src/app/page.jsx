import Clients from "./sections/Clients";
import Feedback from "./sections/Feedback";
import Footer from "./sections/Footer";
import HeroSection from "./sections/Hero";
import Navbar from "./sections/Navbar";
import ProductsSection from "./sections/ProductsSection";
import TeamSection from "./sections/TeamSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <Feedback />
      <TeamSection />
      <Clients />
      <Footer />
    </>
  );
};

export default Home;
