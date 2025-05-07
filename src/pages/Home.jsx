import Hero from "@/components/Hero";
import Trust from "@/components/trustPrivacy/Trust";
import KeyFeatures from "@/components/KeyFeatures";
import { Button } from "@/components/ui/button";
import React from "react";

const Home = () => {
  return (
    <>
      <div>
        <Hero />
        <KeyFeatures />
        <Trust />
      </div>
    </>
  );
};

export default Home;
