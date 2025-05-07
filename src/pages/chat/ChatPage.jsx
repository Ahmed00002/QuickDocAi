import Upload from "@/components/ui/Upload";
import { SendHorizonal } from "lucide-react";
import React from "react";
import ChatBuble from "./ChatBuble";

const ChatPage = () => {
  return (
    <div className="h-[calc(100vh-80px)] flex flex-col">
      {/* Chat content goes here */}
      <section className="h-full grid grid-cols-12">
        {/* Left side: Document preview */}
        <aside className="col-span-4 flex flex-col h-full bg-gray-100 p-2 ">
          {/* <h2 className="text-xl font-semibold mb-4">Document Preview</h2> */}
          {/* Document preview content */}
          <div className="bg-white p-4 rounded-lg shadow-md flex-grow flex items-center justify-center">
            <Upload />
          </div>
        </aside>

        {/* Fixed chat input at   the bottom */}
        <aside className="col-span-8 h-full bg-gray-100 p-2 flex flex-col justify-end">
          <h2 className="text-xl font-semibold mb-4">Chat with AI</h2>
          {/* Chat messages */}
          <div className="flex-grow overflow-y-auto mb-4">
            {/* Chat messages will be displayed here */}
            <ChatBuble />
          </div>

          <div className="w-full p-2 bg-white rounded-lg border-t flex gap-4 justify-between items-center ">
            <form className="w-full flex gap-4">
              <input
                className="w-full h-12 px-4 outline-0 ring-0 border-0 border-gray-300 rounded-md focus:outline-none "
                type="text"
                placeholder="Ask me anything related to your document..."
              />
              <button type="submit">
                <SendHorizonal className="text-blue-500" />
              </button>
            </form>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default ChatPage;
