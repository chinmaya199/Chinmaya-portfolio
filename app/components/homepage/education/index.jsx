// @flow strict
import Image from "next/image";
import { educations } from "../../../../utils/data/educations";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import AnimationLottie from "../../helper/animation-lottie";
import lottieFile from '/public/lottie/study.json';

function Education() {
  return (
    <div id="education" className="relative z-50 my-12 lg:my-24">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute right-0 top-0 -z-10 h-[310px] w-[310px] rounded-full bg-violet-500/20 blur-[120px]"></div>
      <div className="absolute left-0 bottom-0 -z-10 h-[310px] w-[310px] rounded-full bg-pink-500/20 blur-[120px]"></div>

      {/* Section Header */}
      <div className="relative flex flex-col items-center mb-12">
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 h-16 w-16 bg-gradient-to-r from-violet-500/30 to-pink-500/30 rounded-full blur-xl"></div>
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent mb-4">
          Education Journey
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Animation Side */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-pink-500/20 rounded-2xl blur-2xl transform -rotate-6"></div>
              <div className="relative bg-[#0d1224] rounded-2xl p-6 border border-violet-500/20">
                <AnimationLottie animationPath={lottieFile} />
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="relative">
            <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-violet-500 via-pink-500 to-violet-500"></div>

            <div className="space-y-8">
              {educations.map((education, index) => (
                <div
                  key={education.id}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 transform group-hover:scale-125 transition-transform duration-300"></div>

                  {/* Card */}
                  <div className="ml-16 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-pink-500/20 to-violet-500/20 rounded-xl blur group-hover:blur-md transition-all duration-300"></div>
                    <div className="relative bg-[#0d1224] rounded-xl p-6 border border-violet-500/20 group-hover:border-pink-500/20 transition-colors duration-300">
                      {/* Duration Badge */}
                      <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-violet-500/10 to-pink-500/10 border border-violet-500/20 mb-4">
                        <span className="text-sm text-[#16f2b3] font-medium">
                          {education.duration}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-gradient-to-br from-violet-500/10 to-pink-500/10">
                          {index === 0 ? (
                            <HiAcademicCap className="w-6 h-6 text-pink-500" />
                          ) : index === 1 ? (
                            <FaGraduationCap className="w-6 h-6 text-violet-500" />
                          ) : (
                            <FaUniversity className="w-6 h-6 text-[#16f2b3]" />
                          )}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white group-hover:text-pink-500 transition-colors duration-300">
                            {education.title}
                          </h3>
                          <p className="text-gray-400 mt-2 group-hover:text-gray-300 transition-colors duration-300">
                            {education.institution}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;