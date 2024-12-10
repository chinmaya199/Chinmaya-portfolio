// @flow strict

import { experiences } from "../../../../utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import { HiOutlineBriefcase } from "react-icons/hi";
import AnimationLottie from "../../helper/animation-lottie";
import experience from '/public/lottie/code.json';

function Experience() {
  return (
    <div id="experience" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute right-0 bottom-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-violet-500/20 blur-[100px]"></div>

      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-500 to-pink-500 text-transparent bg-clip-text mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Lottie Animation */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600/20 to-pink-600/20 rounded-xl blur-xl"></div>
            <div className="relative bg-[#0d1224]/50 rounded-xl p-8 backdrop-blur-xl">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          {/* Experience Cards */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-block rounded-lg bg-gradient-to-r from-violet-500/20 to-pink-500/20 px-4 py-2 mb-6">
              <span className="bg-gradient-to-r from-violet-500 to-pink-500 text-transparent bg-clip-text font-semibold">
                Career Journey
              </span>
            </div>

            {experiences.map((item) => (
              <div
                key={item.id}
                className="group relative bg-[#0d1224] rounded-xl p-6 border border-gray-800 hover:border-pink-500/50 transition-colors duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-pink-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative flex items-start gap-6">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-r from-violet-500/10 to-pink-500/10 rounded-lg">
                    <HiOutlineBriefcase className="w-6 h-6 text-pink-500" />
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white group-hover:text-pink-500 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <span className="text-sm text-pink-500 font-medium">
                        {item.duration}
                      </span>
                    </div>
                    
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {item.company}
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-violet-500 to-pink-500 group-hover:w-full transition-all duration-300 rounded-b-xl"></div>
              </div>
            ))}

            {/* Call to Action */}
            <div className="mt-8 text-center lg:text-left">
              <p className="text-gray-400 text-sm">
                Looking for new opportunities to make an impact
              </p>
              <a 
                href="#contact"
                className="inline-block mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 text-white font-medium hover:scale-105 transition-transform duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;