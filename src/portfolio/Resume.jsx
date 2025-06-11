import React from "react";
import { motion } from "framer-motion";

const resumeData = [
  {
    year: "2019 – 2021",
    title: "Intermediate in Computer Science",
    subtitle: "ILM Group of Colleges",
    desc: "Focused on Mathematics, Physics, and Computer Science.",
  },
  {
    year: "2021 – 2025",
    title: "Bachelor's in Computer Science",
    subtitle: "Zamindar College (UOS)",
    desc: "Built a strong background in the tech field.",
  },
  {
    year: "2025",
    title: "Full Stack Developer",
    subtitle: "Adan IT Center",
    desc: "Specialized in modern web development using MERN stack.",
  },
  {
    year: "2025",
    title: "WordPress Developer",
    subtitle: "Adan IT Center",
    desc: "Developed custom themes and optimized site performance.",
  },
  {
    year: "2025",
    title: "Cyber Security Course",
    subtitle: "Coursera",
    desc: "Completed training on essential cyber security concepts.",
  },
  {
    year: "2025",
    title: "Prompting Essentials",
    subtitle: "Coursera",
    desc: "Learned to craft effective prompts for generative AI tools.",
  },
];

const Resume = () => {
  return (
    <section className="min-h-screen bg-[#0f172a] text-white px-6 md:px-16 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl text-green-500 font-bold">My Resume</h2>
        <p className="text-gray-400 mt-2">
          A journey through my education, training, and development experience.
        </p>
      </div>

      <div className="relative border-l-2 border-green-500 pl-6 space-y-10 max-w-4xl mx-auto">
        {resumeData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative bg-[#1e293b] p-6 rounded-lg shadow-md hover:shadow-green-500/40"
          >
            {/* Timeline dot */}
            <span className="absolute left-[-1.1rem] top-6 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />

            <p className="text-cyan-400 text-sm font-semibold">{item.year}</p>
            <h3 className="text-xl font-bold mt-1">{item.title}</h3>
            <h4 className="uppercase text-gray-400 text-sm mt-1">{item.subtitle}</h4>
            <p className="text-gray-300 mt-2 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Resume;
