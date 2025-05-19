"use client";

import { useState } from "react";

const feedBackData = [
  {
    name: "Alice Smith",
    title: "Product Manager",
    image: "https://i.ibb.co/bd6JJ76/profile3.jpg",
    feedback:
      "Fresh, flavorful, and just the right amount of heat. The tuna was buttery, the rice well-seasoned, and the chili mayo added a great kick. A must-try for sushi lovers.",
  },
  {
    name: "John Doe",
    title: "Accountant",
    image: "https://i.ibb.co/rRc8HPfs/unsplash-v3-Ol-BE6-fh-U.png",
    feedback:
      "Absolutely delicious! The presentation was beautiful and every bite was bursting with flavor. I’ll definitely be coming back for more.",
  },
  {
    name: "Ryan Henry",
    title: "Front-end Developer",
    image: "https://i.ibb.co/bd6JJ76/profile3.jpg",
    feedback:
      "A fantastic experience from start to finish. The ingredients tasted fresh and the balance of flavors was perfect. Highly recommended!",
  },
];
const Feedback = () => {
  const [showFeedback, setShowFeedback] = useState(0);

  return (
    <section className="container mx-auto">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 bg-white">
        {/* Text Section */}
        <div className="md:w-1/2 text-left px-6">
          <h2 className="text-5xl font-bold mb-4">
            Customer <span className="text-[#AD1519]">Feedback</span>
          </h2>
          <p className="text-gray-600 mb-6">
            {feedBackData[showFeedback].feedback}
          </p>
          {/* User Profile */}
          <div className="flex items-center justify-between mt-10">
            <div className="flex items-center space-x-4">
              <img
                src={feedBackData[showFeedback].image}
                alt="Profile Picture"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-bold text-[#AD1519]">
                  {feedBackData[showFeedback].name}
                </h3>
                <p className="text-gray-500">
                  {feedBackData[showFeedback].title}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {feedBackData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setShowFeedback(idx)}
                  className={`h-4 w-4 rounded-full border border-amber-700 ${
                    showFeedback === idx && "bg-amber-700"
                  } cursor-pointer`}
                ></button>
              ))}
            </div>
          </div>
        </div>

        {/* Image*/}
        <div className="md:w-1/2 flex justify-end">
          <img
            src="https://i.ibb.co/SDVTF1b3/image-1.png"
            alt="Chef"
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Feedback;
