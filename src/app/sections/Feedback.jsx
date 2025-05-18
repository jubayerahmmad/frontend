const Feedback = () => {
  return (
    <section className="container mx-auto">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 bg-white">
        {/* Text Section */}
        <div className="md:w-1/2 text-left px-6">
          <h2 className="text-5xl font-bold mb-4">
            Customer <span className="text-[#AD1519]">Feedback</span>
          </h2>
          <p className="text-gray-600 mb-6">
            Fresh, flavorful, and just the right amount of heat. The tuna was
            buttery, the rice well-seasoned, and the chili mayo added a great
            kick. A must-try for sushi lovers.
          </p>
          {/* User Profile */}
          <div className="flex items-center justify-between mt-10">
            <div className="flex items-center space-x-4">
              <img
                src="https://i.ibb.co/bd6JJ76/profile3.jpg"
                alt="Profile Picture"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-bold text-[#AD1519]">
                  Tayyab Sohail
                </h3>
                <p className="text-gray-500">UX/UI Designer</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="h-4 w-4 rounded-full border border-amber-700 bg-amber-700 cursor-pointer"></button>
              <button className="h-4 w-4 rounded-full border border-gray-700 cursor-pointer"></button>
              <button className="h-4 w-4 rounded-full border border-gray-700 cursor-pointer"></button>
            </div>
          </div>
        </div>

        {/* Image Section */}
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
