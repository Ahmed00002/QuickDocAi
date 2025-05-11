import CommonUses from "@/components/shared/CommonUses";
import SectionTitle from "@/components/shared/SectionTitle";
import Developer from "@/components/shared/WhoFor";
import React from "react";

const About = () => {
  return (
    <div className="">
      <section className="text-center ">
        <div className="bg-[linear-gradient(to_right,#0000001a_1px,transparent_1px),linear-gradient(to_bottom,#0000001a_1px,transparent_1px)] bg-[size:20px_20px] py-20 mask-radial-[ellipse_80%_50%_at_75%_25%] mask-from-black mask-from-70% mask-to-transparent mask-to-110%">
          <h1
            data-aos="fade-up"
            className="text-5xl md:text-6xl lg:text-8xl font-medium font-Oxanium"
          >
            QuickDoc AI
          </h1>
          <h1
            data-aos="fade-up"
            data-aos-delay={"100"}
            className="text-5xl md:text-6xl lg:text-8xl font-medium font-Oxanium mt-2"
          >
            Powered By{" "}
            <span className="inline-block relative px-4 text-white">
              Gemini
              <span className="absolute left-0 top-0 w-full h-full bg-purple-700 -z-10 -skew-3"></span>
            </span>
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay={"200"}
            className="mt-6 text-3xl text-gray-600 w-full md:w-9/12 mx-auto"
          >
            Extract information and obtain answers from large PDF files like
            manuals, essays, and books
          </p>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center marginTop bg-purple-50 py-20 rounded-lg">
        <h2
          data-aos="fade-up"
          className="font-bold text-4xl lg:text-5xl text-primary mb-4"
        >
          Our Mission
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay={"100"}
          className="text-gray-500 text-md font-Sora text-center mt-4 max-w-2xl"
        >
          We aim to empower users by simplifying document analysis through
          intelligent automation so they can make faster, smarter decisions.
        </p>
      </section>

      {/* common use cases of quickDoc ai */}
      <CommonUses />

      {/* <section>
        <h2 className="text-2xl font-semibold text-primary mb-2">
          🔒 Privacy & Security
        </h2>
        <p className="text-gray-700">
          We take user data privacy seriously. Your uploaded documents are
          secure and never shared with any third party.
        </p>
      </section> */}

      {/* component of "who is it for" section */}
      <Developer />
    </div>
  );
};

export default About;
