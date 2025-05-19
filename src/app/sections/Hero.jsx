"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const colors = [
    {
      bgColor: "#880808",
      ellipseColor: "#A52A2A",
    },
    {
      bgColor: "#074b78",
      ellipseColor: "#053f68",
    },
    {
      bgColor: "#5a189a",
      ellipseColor: "#3c096c",
    },
    {
      bgColor: "#0f766e",
      ellipseColor: "#115e59",
    },
  ];
  const images = [
    "https://i.ibb.co/BKFqW5ps/slider-image.png",
    "https://i.ibb.co/YBxt5dcp/slider-thumnail.png",
    "https://i.ibb.co/BKFqW5ps/slider-image.png",
    "https://i.ibb.co/YBxt5dcp/slider-thumnail.png",
  ];

  const [selectedImg, setSelectedImg] = useState(0);
  const { bgColor, ellipseColor } = colors[selectedImg];

  return (
    <motion.div
      className={`relative overflow-hidden  min-h-screen flex items-center px-10 md:px-20 rounded-b-2xl`}
      animate={{ backgroundColor: bgColor }}
      transition={{ duration: 0.6 }}
    >
      {/* ellipses*/}
      <motion.div
        className={`absolute top-[-200px] left-[-200px] w-[560px] h-[440px] lg:w-[1000px] lg:h-[800px] rounded-full z-0`}
        animate={{ backgroundColor: ellipseColor }}
        transition={{ duration: 0.6 }}
      ></motion.div>
      <motion.div
        className={`absolute bottom-[-250px] right-[-250px] w-[560px] h-[440px] lg:w-[700px] lg:h-[600px] rounded-full z-0`}
        animate={{ backgroundColor: ellipseColor }}
        transition={{ duration: 0.6 }}
      ></motion.div>

      <div className="z-10 flex flex-col lg:flex-row justify-between w-full items-center gap-10">
        {/* Text Section */}
        <div className="text-white max-w-xl">
          <h1 className="text-6xl font-bold pt-24 lg:pt-0">BREAKFAST</h1>
          <p className="text-lg font-semibold mt-4 leading-relaxed">
            Breakfast, often referred to as the ‘most important meal of the
            day’, provides essential nutrients to kick start our day. It
            includes a variety of foods, like fruits, cereals, dairy products,
            and proteins, that contribute to a balanced diet.
          </p>

          {/* Thumbnails desktp*/}
          <div className="gap-6 mt-10 hidden lg:flex">
            {images.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImg(idx)}
                className="cursor-pointer relative"
              >
                <img
                  src={img}
                  alt={`thumb-${idx}`}
                  className="w-32 h-32 rounded-full object-cover"
                />
                {selectedImg === idx && (
                  <div className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 w-24 h-1 bg-white" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Image Animation */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedImg}
              initial={{ x: 400, y: -100, opacity: 1 }}
              exit={{ x: -400, y: 500, opacity: 0, duration: 2 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src={images[selectedImg]}
                alt="main-breakfast"
                className="w-64 h-64 xl:w-[400px] xl:h-[400px] object-cover"
              />
            </motion.div>
          </AnimatePresence>
          <button
            disabled={selectedImg === 0}
            onClick={() => {
              if (selectedImg === 0) return;
              setSelectedImg(selectedImg - 1);
            }}
            className="lg:hidden disabled:text-gray-600 block absolute top-1/2 -left-16 p-2 rounded-full text-white bg-gray-600/40"
          >
            <ArrowLeft />
          </button>
          <button
            disabled={images.length - 1 === selectedImg}
            onClick={() => {
              if (images.length - 1 === selectedImg) return;
              setSelectedImg(selectedImg + 1);
            }}
            className="lg:hidden disabled:text-gray-500 block absolute top-1/2 -right-16 p-2 rounded-full text-white bg-gray-600/40"
          >
            <ArrowRight />
          </button>
        </div>

        {/* Thumbnails mobile*/}
        <div className="gap-6 lg:hidden flex pb-16">
          {images.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImg(idx)}
              className="cursor-pointer relative"
            >
              <img
                src={img}
                alt={`thumb-${idx}`}
                className="w-20 h-20 rounded-full object-cover"
              />
              {selectedImg === idx && (
                <div className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-white rounded-full" />
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
