import React from "react";
import bot from "../../assets/QuickDocAiBot.png";
import { Send } from "lucide-react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className=" marginTop bg-gray-50">
      <div className="center py-10">
        {/* upper part */}
        <div className=" grid grid-cols-1 gap-6 md:gap-0 md:grid-cols-12 w-full relative">
          <div className="col-span-6">
            <p className="uppercase text-base">no credit card Required</p>
            <p className="capitalize text-4xl font-bold my-6">
              Start using QuickDoc Ai today
            </p>
            <form>
              <div className="flex w-full md:w-8/12 border-b px-4 py-2">
                <input
                  className="w-full border-0 ring-0 outline-0 px-2"
                  type="email"
                  placeholder="Your Email"
                />
                <Send className="text-primary-dark" />
              </div>
            </form>
          </div>
          {/* robot ai */}
          <div className="col-span-6  flex  justify-center ">
            <img
              className="aspect-square h-[200px] w-[250px] object-contain"
              src={bot}
              alt="quick bot ai robot png"
            />
          </div>
        </div>

        {/* logo and links part */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-0 w-full mt-10">
          <div className="md:col-span-4 lg:col-span-6 flex flex-col items-start justify-end">
            <h1 className="text-3xl font-bold font-Oxanium">
              QuickDoc{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5A0] to-[#00D9F5]">
                AI
              </span>
            </h1>
            <p className="mt-2">Gemini Powered AI document analyzer</p>
          </div>
          <div className="md:col-span-2">
            <h1 className="text-lg font-semibold">Product</h1>
            <ul className="flex flex-col gap-2 mt-4">
              <li>Features</li>
              {/* <li>Pricing</li> */}
              <li>Docs</li>
              <li>Changelog</li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h1 className="text-lg font-semibold">Company</h1>
            <ul className="flex flex-col gap-2 mt-4">
              <Link to={"/about"}>About</Link>
              <Link to={"/privacy-policy"}>Privacy Policy</Link>
            </ul>
          </div>
          <div className="md:col-span-4 lg:col-span-2 flex flex-col flex-wrap ">
            <h1 className="text-lg font-semibold">Support</h1>
            <a
              href="mailto:support@quickdocai.com?subject=Support%20Request&body=Hello,%20I%20need%20help%20with..."
              className="mt-4 mb-2"
            >
              ahmednuman.top@gmail.com
            </a>
            <div className="flex gap-2 text-2xl">
              <FaFacebook className="cursor-pointer hover:text-primary-dark" />
              <FaGithub className="cursor-pointer hover:text-primary-dark" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
