import bot from "@/assets/heroRobot.png";
import Markdown from "react-markdown";
import { useUser } from "@clerk/clerk-react";

const ChatBuble = ({ aiMsg, isAi }) => {
  const { message } = aiMsg;
  // const [displayedText, setDisplayedText] = useState("");
  const { user } = useUser();

  return (
    <div className="flex items-start gap-2.5 mb-4 ">
      <img
        className={`w-8 h-8 rounded-full ${
          isAi === "ai" ? "order-1" : "order-2"
        }`}
        src={isAi === "ai" ? bot : user.imageUrl}
        alt="Profile"
      />
      <div
        className={`flex flex-col w-full max-w-auto leading-1.5 p-2 rounded-lg  ${
          isAi === "ai" ? "order-2" : "order-1"
        }`}
      >
        <p
          className={`text-sm font-semibold text-gray-900 w-full dark:text-white text-ellipsis ${
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
              <Markdown>{message}</Markdown>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBuble;
