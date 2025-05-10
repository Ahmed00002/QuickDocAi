import Hero from "@/components/Hero";
import Trust from "@/components/trustPrivacy/Trust";
import KeyFeatures from "@/components/KeyFeatures";
import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import useAxiosSecure from "@/hooks/useAxiosSecure";

const Home = () => {
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get("verifyJWT").then((res) => {
      console.log(res.data);
    });
  }, [axiosSecure]);
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
