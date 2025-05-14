import React from "react";

const Loader = () => {
  return (
    <>
      <section className="fixed h-screen w-full top-0 left-0 flex justify-center items-center backdrop-blur-lg bg-transparent z-50 ">
        <div className="loader"></div>
      </section>
    </>
  );
};

export default Loader;
