// @flow strict

import { skillsData } from "../../../../utils/data/skills";
import { skillsImage } from "../../../../utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function Skills() {
  const skillCategories = {
    "Frontend": ["React", "Next JS", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind"],
    "Backend": ["Node.js", "Express", "PHP", "MySQL", "MongoDB"],
    "Tools & Platforms": ["Git", "Docker", "AWS", "Firebase", "Figma"]
  };

  return (
    <div id="skills" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-0 top-1/2 -z-10 h-[310px] w-[310px] rounded-full bg-violet-500/20 blur-[100px]"></div>
      <div className="absolute right-0 bottom-0 -z-10 h-[310px] w-[310px] rounded-full bg-pink-500/20 blur-[100px]"></div>

      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-500 to-pink-500 text-transparent bg-clip-text mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full"></div>
        </div>

        {/* Skills Categories */}
        <div className="space-y-12">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="relative">
              <div className="inline-block rounded-lg bg-gradient-to-r from-violet-500/20 to-pink-500/20 px-4 py-2 mb-8">
                <span className="bg-gradient-to-r from-violet-500 to-pink-500 text-transparent bg-clip-text font-semibold">
                  {category}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="group relative bg-[#0d1224] rounded-xl p-6 hover:bg-[#0d1224]/80 transition-colors duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-pink-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-[1px] bg-gradient-to-r from-violet-500/25 to-pink-500/25 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
                    
                    <div className="relative flex flex-col items-center space-y-4">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-violet-500/10 to-pink-500/10 group-hover:from-violet-500/20 group-hover:to-pink-500/20 transition-colors duration-300">
                        <Image
                          src={skillsImage(skill)?.src}
                          alt={skill}
                          width={40}
                          height={40}
                          className="w-8 h-8 md:w-10 md:h-10 object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <span className="text-sm md:text-base text-gray-300 group-hover:text-white transition-colors duration-300">
                        {skill}
                      </span>
                    </div>

                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-violet-500 to-pink-500 group-hover:w-full transition-all duration-300 rounded-b-xl"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Animated Skill Marquee */}
        <div className="mt-20">
          <Marquee
            gradient={false}
            speed={50}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
            className="py-8"
          >
            {skillsData.map((skill, id) => (
              <div
                key={id}
                className="mx-4 p-4 rounded-xl bg-gradient-to-r from-violet-500/10 to-pink-500/10 backdrop-blur-sm hover:from-violet-500/20 hover:to-pink-500/20 transition-colors duration-300"
              >
                <Image
                  src={skillsImage(skill)?.src}
                  alt={skill}
                  width={40}
                  height={40}
                  className="w-8 h-8 object-contain"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Skills;