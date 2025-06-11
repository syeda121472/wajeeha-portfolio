import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="min-h-screen pt-[4rem] bg-[#0d1117] text-white flex items-center justify-center px-4 py-10"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-4 items-center max-w-6xl w-full">
        {/* Left: Text */}
        <div className="space-y-6 md:ml-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-green-500">About Me</h1>
          <div>
            <h2 className="text-md sm:text-lg font-semibold">EMAIL</h2>
            <p className="text-green-300 text-sm sm:text-base">wajeeha@yourwebsite.com</p>
          </div>
          <div>
            <h2 className="text-md sm:text-lg font-semibold">ROLE</h2>
            <p className="text-green-300 text-sm sm:text-base">Full Stack Developer</p>
          </div>
          <div>
            <h2 className="text-md sm:text-lg font-semibold">PHONE</h2>
            <p className="text-green-300 text-sm sm:text-base">(+92) 456 7890</p>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 mx-auto">
          <div className="relative w-full h-full rounded-full bg-gradient-to-tr from-green-400 via-blue-500 to-purple-500 p-[3px] shadow-lg">
            <div className="w-full h-full rounded-full bg-[#0d1117] p-[3px]">
              <img
                src="/hero-image.jpg"
                alt="Wajeeha Profile"
                className="w-full h-full object-cover rounded-full border-4 border-[#0d1117]"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
