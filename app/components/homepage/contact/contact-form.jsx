"use client";
import { isValidEmail } from "../../../../utils/check-email";
import axios from "axios";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";

function ContactForm() {
  const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    if (!userInput.email || !userInput.message || !userInput.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    };

    try {
      setIsLoading(true);
      const res = await axios.post(
        `/api/contact`,
        userInput
      );

      toast.success("Message sent successfully!");
      setUserInput({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error(error?.response?.data?.message || "An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    };
  };

  return (
    <div className="relative">
      <div className="absolute -z-10 top-0 right-0 w-72 h-72 bg-violet-500/20 rounded-full blur-[120px]" />
      <div className="absolute -z-10 bottom-0 left-0 w-72 h-72 bg-pink-500/20 rounded-full blur-[120px]" />

      <div className="relative">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="mt-3 w-24 h-1.5 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="backdrop-blur-sm rounded-2xl p-1 bg-gradient-to-r from-violet-500/20 to-pink-500/20">
            <div className="bg-[#0d1224]/90 rounded-xl p-8">
              <p className="text-gray-300 mb-8 text-center">
                {"If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."}
              </p>

              <form onSubmit={handleSendMail} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <input
                      type="text"
                      placeholder="Your Name"
                      maxLength="100"
                      required
                      value={userInput.name}
                      onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
                      onBlur={checkRequired}
                      className="w-full bg-[#10172d]/50 text-white px-4 py-3 rounded-lg border border-violet-500/20 focus:border-pink-500/40 focus:ring-2 focus:ring-pink-500/20 outline-none transition-all duration-300 placeholder-gray-400"
                    />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-violet-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="relative group">
                    <input
                      type="email"
                      placeholder="Your Email"
                      maxLength="100"
                      required
                      value={userInput.email}
                      onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
                      onBlur={() => {
                        checkRequired();
                        setError({ ...error, email: !isValidEmail(userInput.email) });
                      }}
                      className="w-full bg-[#10172d]/50 text-white px-4 py-3 rounded-lg border border-violet-500/20 focus:border-pink-500/40 focus:ring-2 focus:ring-pink-500/20 outline-none transition-all duration-300 placeholder-gray-400"
                    />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-violet-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                <div className="relative group">
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    maxLength="500"
                    required
                    value={userInput.message}
                    onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
                    onBlur={checkRequired}
                    className="w-full bg-[#10172d]/50 text-white px-4 py-3 rounded-lg border border-violet-500/20 focus:border-pink-500/40 focus:ring-2 focus:ring-pink-500/20 outline-none transition-all duration-300 placeholder-gray-400"
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-violet-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="text-center mt-8">
                  {error.required && (
                    <p className="text-red-500 mb-2">
                      {"All fields are required."}
                    </p>
                  )}
                  {error.email && (
                    <p className="text-red-500 mb-2">
                      {"Invalid email address."}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="relative group inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-violet-500 to-pink-500 rounded-lg shadow-lg hover:shadow-pink-500/40 hover:shadow-md focus:ring-4 focus:ring-pink-500/20 focus:outline-none"
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                    <TbMailForward className="ml-2 text-2xl transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
