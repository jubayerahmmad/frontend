import Marquee from "react-fast-marquee";

const Clients = () => {
  const images = [
    "/clients1.png",
    "/clients2.png",
    "/clients3.png",
    "/clients4.png",
    "/clients5.png",
    "/clients6.png",
  ];
  return (
    <div className="container mx-auto my-12">
      <div className="text-center px-3 py-10">
        <h1 className="text-[#A52A2A] font-bold">Partners & Clients</h1>
        <p className="text-3xl font-bold">We work with the best people</p>
      </div>
      <Marquee autoFill direction="right" speed={150}>
        {images.map((img, idx) => (
          <div className="" key={idx}>
            <img src={img} className="mx-12" alt="clients" />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Clients;
