import React from "react";
import SectionTitle from "./shared/SectionTitle";

const KeyFeatures = () => {
  const quickDocFeatures = [
    {
      id: 1,
      title: "Smart PDF Reader",
      description:
        "Upload any medical document or report, and QuickDoc AI will extract and summarize key information instantly.",
      icon: "📄",
    },
    {
      id: 2,
      title: "AI-Powered Question Answering",
      description:
        "Ask questions directly from your uploaded files — our AI finds the answer from the document accurately.",
      icon: "🤖",
    },
    {
      id: 3,
      title: "Seamless Upload & Chat",
      description:
        "Drag and drop your PDF, then start chatting with your document like you’re talking to a medical expert.",
      icon: "💬",
    },
  ];

  return (
    <div>
      <div className="z-0 w-full relative flex flex-col items-center justify-center gap-4 p-10 mb-20 center">
        {/* section title */}
        <SectionTitle
          title={"Key Features"}
          subtitle={
            "1 Powerful tools to read, analyze, and understand your documents—fast, secure, and effortless. Want variations for subtitles or taglines too?"
          }
        />

        {/* features list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {quickDocFeatures.map((feature) => (
            <div
              data-aos="fade-up"
              key={feature.id}
              className="bg-white border-l-[1.5px] p-6 flex flex-col items-start justify-start relative"
            >
              <span className="mb-4 text-3xl absolute left-0 -top-3 -translate-x-1/2 -translate-y-1/2">
                {feature.icon}
              </span>
              <h2 className="font-semibold mb-2 text-lg md:text-xl 2xl:text-2xl">
                {feature.title}
              </h2>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
