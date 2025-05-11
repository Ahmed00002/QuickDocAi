import React, { useEffect, useState } from "react";
import bot from "@/assets/heroRobot.png";
import { Typewriter } from "react-simple-typewriter";

const ChatBuble = ({ aiMsg, isAi }) => {
  const { message } = aiMsg;
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    setDisplayedText(""); // Reset before typing starts

    if (isAi === "ai") {
      const interval = setInterval(() => {
        setDisplayedText((prev) => {
          if (index < message.length) {
            const nextChar = message.charAt(index);
            index++;
            return prev + nextChar;
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, 30);

      return () => clearInterval(interval); // Clean-up
    } else {
      setDisplayedText(message); // For user, no typing animation
    }
  }, [message, isAi]);

  return (
    <div className="flex items-start gap-2.5 mb-4">
      <img
        className={`w-8 h-8 rounded-full ${
          isAi === "ai" ? "order-1" : "order-2"
        }`}
        src={bot}
        alt="Profile"
      />
      <div
        className={`flex flex-col w-full max-w-auto leading-1.5 p-2 rounded-lg ${
          isAi === "ai" ? "order-2" : "order-1"
        }`}
      >
        <p
          className={`text-sm font-semibold text-gray-900 w-full dark:text-white ${
            isAi === "ai" ? "text-left" : "text-right"
          }`}
        >
          {isAi === "ai" ? "QuickDoc AI" : "You"}
        </p>
        <div
          className={`flex ${isAi === "ai" ? "justify-start" : "justify-end"}`}
        >
          <div className="bg-gray-200 w-auto p-2 inline-block rounded-lg">
            <p
              className={`text-sm font-normal py-2 text-gray-900 dark:text-white ${
                isAi === "user" && "text-right"
              }`}
            >
              {/* {isAi === "ai" ? (
                <Typewriter words={message.split()} loop={1} typeSpeed={5} />
              ) : (
                message
              )} */}
              {message}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBuble;
