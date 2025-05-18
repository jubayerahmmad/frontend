import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
// import pinterest from "/public/pinterest.png";
// import facebook from "./app/public/facebooook.png";
// import insta from "/public/insta.png";
// import utb from "/public/utb.png";
// import x from "/public/x.png";

const Footer = () => {
  return (
    <footer className="w-full">
      {/* Main Footer */}
      <div className="bg-[#880808] text-white py-16">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row gap-8">
          {/* Newsletter Section */}
          <div className="md:w-1/4">
            <h2 className="text-2xl font-bold mb-4">RESTAURANT</h2>
            <p className="mb-4">
              Subscribe our newsletter and get discount 25%off
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="bg-white text-gray-800 p-2 rounded-l w-full focus:outline-0"
              />
              <button className="bg-red-700 p-2 rounded-r">
                <Send size={16} />
              </button>
            </div>
            <div className="flex gap-4 mt-4">
              <img src="/pinterest.png" alt="pinterest logo" />
              <img src="/x.png" alt="facebook logo" />
              <img src="/facebooook.png" alt="facebook logo" />
              <img src="/insta.png" alt="insta logo" />
              <img src="/utb.png" alt="facebook logo" />
            </div>
          </div>

          {/* Contact Section */}
          <div className="md:w-1/4">
            <h2 className="text-xl font-bold mb-4">Contact us</h2>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                <span>3517 W. Gray St. Utica, Pennsylvania 57867</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={20} />
                <span>(480) 555-0103</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={20} />
                <span>M.Alyaqout@4house.Co</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={20} />
                <span>Sun - Sat / 10:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="md:w-1/4">
            <h2 className="text-xl font-bold mb-4">Links</h2>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#" className="hover:text-red-300">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-300">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-300">
                  Our Menu
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-300">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-300">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Instagram Gallery */}
          <div className="md:w-1/4 hidden md:block">
            <h2 className="text-xl font-bold mb-4">Instagram Gallery</h2>
            <div className="grid grid-cols-3 gap-2">
              <img
                src="https://i.ibb.co/MkfcPm6Y/unsplash-jeiqz-Ogww-KU.png"
                alt="Food"
                className="w-full h-24 object-cover rounded"
              />
              <img
                src="https://i.ibb.co/Hpb5216H/unsplash-id-Tw-DKt2j2o.png"
                alt="Food"
                className="w-full h-24 object-cover rounded"
              />
              <img
                src="https://i.ibb.co/84rbs8VR/unsplash-74y-Rj-Q-cv-NI.png"
                alt="Food"
                className="w-full h-24 object-cover rounded"
              />
              <img
                src="https://i.ibb.co/Hpb5216H/unsplash-id-Tw-DKt2j2o.png"
                alt="Food"
                className="w-full h-24 object-cover rounded"
              />
              <img
                src="https://i.ibb.co/84rbs8VR/unsplash-74y-Rj-Q-cv-NI.png"
                alt="Food"
                className="w-full h-24 object-cover rounded"
              />
              <img
                src="https://i.ibb.co/MkfcPm6Y/unsplash-jeiqz-Ogww-KU.png"
                alt="Food"
                className="w-full h-24 object-cover rounded"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-[#A52A2A] text-white py-4">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
          <div>
            <p>Copyright © 2025. All rights reserved</p>
          </div>
          <div className="flex gap-6 mt-2 md:mt-0">
            <a href="#" className="hover:text-red-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-red-300">
              Term of Use
            </a>
            <a href="#" className="hover:text-red-300">
              Partner
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
