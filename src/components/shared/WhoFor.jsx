import React from "react";
import { FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa";
import dev from "../../assets/nuan.png";

const Developer = () => {
  //   const targetUsers = [
  //     {
  //       id: 1,
  //       title: "Students",
  //       description:
  //         "Extract key info from academic documents like mark sheets, assignments, and certificates.",
  //       icon: "🎓",
  //     },
  //     {
  //       id: 2,
  //       title: "Doctors & Medical Staff",
  //       description:
  //         "Analyze prescriptions, test reports, and patient history documents quickly and accurately.",
  //       icon: "🩺",
  //     },
  //     {
  //       id: 3,
  //       title: "Lawyers",
  //       description:
  //         "Scan contracts, legal notices, and case summaries to extract relevant clauses and dates.",
  //       icon: "⚖️",
  //     },
  //     {
  //       id: 4,
  //       title: "Business Owners",
  //       description:
  //         "Extract data from invoices, receipts, and agreements without manual entry.",
  //       icon: "💼",
  //     },
  //     {
  //       id: 5,
  //       title: "Freelancers",
  //       description:
  //         "Quickly scan client documents, briefs, or agreements for important details.",
  //       icon: "💻",
  //     },
  //     {
  //       id: 6,
  //       title: "Government Officers",
  //       description:
  //         "Analyze official forms, IDs, and applications efficiently for data processing.",
  //       icon: "🏛️",
  //     },
  //   ];

  return (
    <>
      <section
        id="meet-the-developer"
        className="bg-gray-900 text-white py-16 px-6 marginTop"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left: Profile Image */}
          <div
            data-aos="fade-up"
            className="w-48 h-48 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg"
          >
            <img
              src={dev}
              alt="Developer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Text Content */}
          <div className="flex-1">
            <h2 data-aos={"fade-up"} className="text-4xl font-bold mb-2">
              Meet the Developer
            </h2>
            <p
              data-aos={"fade-up"}
              data-aos-delay={"100"}
              className="text-xl text-purple-400 font-medium mb-4"
            >
              The mind behind QuickDoc AI
            </p>
            <p
              data-aos={"fade-up"}
              data-aos-delay={"200"}
              className="text-gray-300 mb-4"
            >
              Hi, I’m{" "}
              <span className="text-white font-semibold">
                Layek Ahmed Numan
              </span>{" "}
              — a passionate Frontend Developer dedicated to building smart and
              impactful digital tools. QuickDoc AI was created to revolutionize
              how we analyze documents using the power of AI.
            </p>
            <p
              data-aos={"fade-up"}
              data-aos-delay={"300"}
              className="text-gray-400 italic mb-4"
            >
              “Thanks for checking out QuickDoc AI — built with ❤️, code, and
              coffee ☕.”
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-3 mt-4">
              {[
                "React.js",
                "Node.js",
                "Express",
                "MongoDB",
                "Tailwind CSS",
                "AI Integration",
              ].map((skill, index) => (
                <span
                  data-aos={"fade-up"}
                  data-aos-delay={index * 100}
                  key={skill}
                  className="bg-purple-700 text-white px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Social Links */}
            <div data-aos={"fade-up"} className="flex gap-6 mt-6 text-2xl">
              <a
                href="https://github.com/Ahmed00002"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/layekahmednuman"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://yourportfolio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400"
              >
                <FaGlobe />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Developer;
