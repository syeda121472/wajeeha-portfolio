import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", icon: "https://img.icons8.com/color/96/html-5--v1.png" },
  { name: "CSS", icon: "https://img.icons8.com/color/96/css3.png" },
  { name: "Java", icon: "https://img.icons8.com/color/96/java-coffee-cup-logo--v1.png" },
  { name: "React", icon: "https://img.icons8.com/color/96/react-native.png" },
  { name: "Tailwind CSS", icon: "https://img.icons8.com/color/96/tailwindcss.png" },
  {
    name: "Express",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
  },
  { name: "Node.js", icon: "https://img.icons8.com/color/96/nodejs.png" },
  { name: "MongoDB", icon: "https://img.icons8.com/color/96/mongodb.png" },
];

const SkillCard = ({ icon, name, delay }) => (
  <motion.div
    className="flex flex-col items-center text-gray-300 bg-[#1e293b] p-6 rounded-lg shadow-md hover:shadow-green-500/40 transition duration-300 transform hover:-translate-y-2"
    initial={{ opacity: 0, y: 30, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay }}
  >
    <img
      src={icon}
      alt={name || "skill-icon"}
      className="w-20 h-20 mb-4"
    />
    <h3 className="text-lg font-semibold text-white">{name}</h3>
  </motion.div>
);

export default function SkillPage() {
  return (
    <div className="min-h-screen bg-[#0d1117] pt-28 pb-16 px-6">
      {/* Header */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl font-bold text-green-500 mb-4">My Skills ⚡</h1>
        <p className="text-gray-300 font-light max-w-xl mx-auto">
          Proficient in modern web technologies and tools for building full-stack applications with clean, responsive designs.
        </p>
      </motion.div>

      {/* Skill Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <SkillCard
            key={skill.name}
            icon={skill.icon}
            name={skill.name}
            delay={index * 0.1}
          />
        ))}
      </div>
    </div>
  );
}
