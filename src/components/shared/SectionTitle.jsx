import PropTypes from "prop-types";
import React from "react";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center  mb-10">
        <h1 data-aos="fade-up" className=" font-bold text-4xl">
          {title}
        </h1>
        <p
          data-aos="fade-up"
          className="text-gray-500 text-md font-Sora text-center mt-4 max-w-2xl"
        >
          {subtitle}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
