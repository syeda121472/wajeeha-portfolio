import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import skintheory from '../assets/skintheory.png';

export default function Project() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const projects = [
    {
      title: 'Tic Tac Toe',
      description: 'Created a React-based Tic Tac Toe game with intelligent win logic.',
      imageUrl: 'https://miro.medium.com/v2/resize:fit:1200/1*3Rv4KFuTU5IJxCvhY_-tsA.png',
      githubLink: 'https://github.com/syeda121472/TICTACTOE',
    },
    {
      title: 'Rock Paper Scissors',
      description: 'A fun web-based version of the Rock Paper Scissors game.',
      imageUrl: 'https://media.licdn.com/dms/image/v2/D4D22AQEs0NjicRPr2A/feedshare-shrink_800/feedshare-shrink_800/0/1726078195637?e=2147483647&v=beta&t=qyJ6SLvM_oZE9hHK7O_Opq0QS--G03dVauHwLg_jLiU',
      githubLink: 'https://github.com/syeda121472/Rock-Paper-Scissors-',
    },
    {
      title: 'SKIN THEORY',
      description: 'Discover the best in skincare and makeup. Share your beauty wisdom and get inspired by others.',
      imageUrl: skintheory,
      githubLink: 'https://github.com/syeda121472/SkinTheory',
    },
  ];

  return (
    <section className="min-h-screen bg-[#0f172a] text-white px-4 sm:px-6 md:px-10 lg:px-20 py-20">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-green-500 mb-4">Projects</h2>
        <p className="text-gray-300 max-w-xl mx-auto">A few featured projects I’ve developed recently.</p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 200}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="w-full max-w-sm bg-[#1e293b] p-5 rounded-xl border border-gray-700 shadow-lg hover:shadow-xl transform hover:scale-[1.03] transition duration-500"
          >
            <div className="overflow-hidden rounded-lg">
              <motion.img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg transition-transform duration-300 hover:scale-110"
                whileHover={{ scale: 1.05 }}
              />
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-bold text-cyan-400">{project.title}</h3>
              <p className="text-gray-300 mt-2 text-sm">{project.description}</p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-full text-sm transition-colors duration-300"
              >
                View on GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
