import PropTypes from "prop-types";
import React from "react";

const TrustCard = ({ trust }) => {
  const { id, icon, title, description } = trust;
  return (
    <div
      data-aos={"fade-up"}
      data-aos-delay={id * 100}
      className="bg-white border-b-[2px] p-6 flex flex-col items-start justify-start relative overflow-hidden rounded-lg border-primary-dark group cursor-pointer perspective"
    >
      {/* shadow */}
      <span className="absolute bg-[#70c2e9] blur-3xl w-[100px] h-60 bottom-0 right-0 opacity-20"></span>
      <span className="absolute bg-[#9c40ff] blur-3xl w-[100px] h-60 top-0 left-0 opacity-20"></span>
      <span className="mb-4 text-6xl text-primary-main group-hover:transition-transform duration-700 group-hover:transform-style-preserve-3d group-hover:rotate-y-180 transition-transform ">
        {icon}
      </span>
      <h2 className="font-semibold mb-2 text-lg md:text-xl 2xl:text-2xl">
        {title}
      </h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default TrustCard;

TrustCard.propTypes = {
  trust: PropTypes.shape({
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
