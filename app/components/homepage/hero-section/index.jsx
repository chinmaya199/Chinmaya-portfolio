"use client";
// @flow strict

import { personalData } from "../../../../utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-16 lg:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full bg-[#0d1224]">
        <div className="absolute inset-0 w-full h-full bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 to-pink-500/10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-48 bg-gradient-to-b from-violet-500/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-48 bg-gradient-to-t from-pink-500/10 to-transparent blur-3xl" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 w-full h-full">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
              x: [0, Math.random() * 400 - 200, 0],
              y: [0, Math.random() * 400 - 200, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                Hello, I&apos;m{" "}
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
                    {personalData.name}
                  </span>
                  <motion.span
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-violet-500"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  />
                </span>
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-2xl md:text-3xl lg:text-4xl text-[#16f2b3] font-bold"
              >
                {personalData.designation}
              </motion.h2>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center lg:justify-start items-center gap-6"
            >
              {[
                { icon: BsGithub, link: personalData.github },
                { icon: BsLinkedin, link: personalData.linkedIn },
                { icon: FaFacebook, link: personalData.facebook },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.link}
                  target="_blank"
                  className="group relative p-2"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-300" />
                  <span className="relative block text-white group-hover:scale-110 transition duration-300">
                    <social.icon size={28} />
                  </span>
                </Link>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Link
                href="#contact"
                className="group relative inline-flex items-center justify-center px-8 py-3 font-bold text-white transition-all duration-300 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-pink-500/40"
              >
                <span className="relative flex items-center gap-2">
                  Contact me <RiContactsFill className="group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </Link>

              <Link
                href={personalData.resume}
                target="_blank"
                className="group relative inline-flex items-center justify-center px-8 py-3 font-bold text-white transition-all duration-300 border-2 border-violet-500 rounded-full hover:bg-violet-500/20 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  Get Resume <MdDownload className="group-hover:translate-y-1 transition-transform duration-300" />
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Code Display */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-violet-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-300" />
            <div className="relative bg-[#0d1224] rounded-xl border border-gray-800">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-2 text-sm text-gray-400">developer.js</div>
              </div>
              
              <div className="p-4 space-y-4 font-mono text-sm md:text-base">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 1 }}
                  className="text-pink-500"
                >
                  const <span className="text-white">developer</span> = {`{`}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 1.2 }}
                  className="pl-4"
                >
                  <span className="text-white">name:</span>{" "}
                  <span className="text-yellow-300">&apos;{personalData.name}&apos;</span>,
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 1.4 }}
                  className="pl-4"
                >
                  <span className="text-white">skills:</span> [
                  <div className="pl-4 text-yellow-300">
                    &apos;React&apos;, &apos;Electron&apos;, &apos;Redux&apos;,<br/>
                    &apos;Express&apos;, &apos;NestJS&apos;, &apos;MySQL&apos;,<br/>
                    &apos;MongoDB&apos;, &apos;Docker&apos;, &apos;AWS&apos;,<br/>
                    &apos;PHP&apos;, &apos;Node.js&apos;, &apos;Yii&apos;
                  </div>
                  ],
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 1.6 }}
                  className="pl-4"
                >
                  <span className="text-green-400">status:</span>{" "}
                  <span className="text-blue-400">&apos;Ready for new challenges&apos;</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 1.8 }}
                >
                  {`}`}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
