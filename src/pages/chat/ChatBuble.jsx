import bot from "@/assets/bot.png";
import Markdown from "react-markdown";
import { useUser } from "@clerk/clerk-react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import ShinyText from "@/components/shared/ShinyText";

const ChatBuble = ({ aiMsg, isAi }) => {
  const { message } = aiMsg;
  // const [displayedText, setDisplayedText] = useState("");
  const { user } = useUser();

  return (
    <div className="flex items-start gap-2.5 mb-4 ">
      <img />
      <Avatar className={`${isAi === "ai" ? "order-1" : "order-2"}`}>
        <AvatarImage
          className={`size-8 rounded-full`}
          src={isAi === "ai" ? bot : user.imageUrl}
          alt="Profile"
        />
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
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
              className={`text-sm font-normal text-gray-900 dark:text-white ${
                isAi === "user" && "text-right"
              }`}
            >
              {message}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBuble;
