// @flow strict

import { personalData } from "../../../../utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <div id="about" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-pink-500/20 blur-[100px]"></div>

      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 text-transparent bg-clip-text mb-4">
            About Me
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-violet-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative">
              <Image
                src={personalData.profile}
                width={400}
                height={400}
                alt={personalData.name}
                className="rounded-xl shadow-2xl transform transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-violet-500/40 to-pink-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Content Column */}
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-gradient-to-r from-pink-500/20 to-violet-500/20 px-4 py-2">
              <span className="bg-gradient-to-r from-pink-500 to-violet-500 text-transparent bg-clip-text font-semibold">
                Who I am
              </span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              A Passionate{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
                Software Developer
              </span>{" "}
              from India
            </h3>

            <p className="text-gray-300 leading-relaxed">
              {personalData.description}
            </p>

            {/* Stats or Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
              {[
                { label: "Years Experience", value: "2+" },
                { label: "Projects Completed", value: "8+" },
                { label: "Technologies", value: "10+" }
              ].map((stat, index) => (
                <div key={index} className="p-4 rounded-lg bg-[#0d1224] border border-gray-800 hover:border-pink-500/50 transition-colors duration-300">
                  <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 text-transparent bg-clip-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;