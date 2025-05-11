import Upload from "@/components/ui/Upload";
import { MoveLeft, MoveRight, SendHorizonal } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import ChatBuble from "./ChatBuble";
import { Document, Page } from "react-pdf";
import { FaFileUpload } from "react-icons/fa";
import useAxiosSecure from "@/hooks/useAxiosSecure";

const ChatPage = () => {
  const [file, setFile] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const axiosSecure = useAxiosSecure();
  // chats of user and ai
  const [chatMessages, setChatMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  const nextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const prevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleFileUpload = (e) => {
    e.preventDefault();
    setLoading(true);
    const file = e.target.files[0];
    setFile(file);
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      // this request will perform instantly when a user upload a file.
      axiosSecure.post("/analyze-pdf", formData).then((res) => {
        setLoading(false);

        // console.log(res.data.candidates[0].content.parts[0].text);
        setChatMessages((prev) => [
          ...prev,
          {
            type: "ai",
            message: res.data.candidates[0].content.parts[0].text,
          },
        ]);
        console.log(chatMessages);

        // console.log("recivied", res.data.candidates[0].content.parts[0].text);
      });
    }
  };

  const handleInput = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const prompt = data.get("prompt");
    const form = e.target;

    setLoading(true);
    setChatMessages((prev) => [
      ...prev,
      {
        type: "user",
        message: prompt,
      },
    ]);
    data.append("file", file);
    form.reset();
    // checking condition if user uploaded pdf file.
    if (file) {
      axiosSecure.post(`/analyze-pdf?prompt=${prompt}`, data).then((res) => {
        setChatMessages;
        setLoading(false);

        // console.log(res.data.candidates[0].content.parts[0].text);
        setChatMessages((prev) => [
          ...prev,
          {
            type: "ai",
            message: res.data.candidates[0].content.parts[0].text,
          },
        ]);
        console.log(chatMessages);
      });
    } else {
      axiosSecure.get(`/chat?prompt=${prompt}`).then((res) => {
        setLoading(false);
        setChatMessages((prev) => [
          ...prev,
          {
            type: "ai",
            message: res.data,
          },
        ]);
      });
    }
  };
  return (
    <div className="h-[calc(100vh-80px)] flex flex-col">
      {/* Chat content goes here */}
      <section className="h-full grid grid-cols-12">
        {/* Left side: Document preview */}
        <aside className="col-span-4 flex flex-col  bg-gray-100 p-2  overflow-hidden">
          {/* <h2 className="text-xl font-semibold mb-4">Document Preview</h2> */}
          {/* Document preview content */}
          <div className="bg-white  rounded-lg shadow-md flex-grow flex flex-col items-center justify-center ">
            {!file ? (
              <>
                <Upload handleUpload={handleFileUpload} />
              </>
            ) : (
              <>
                <div className="flex flex-col items-center justify-center ">
                  <Document
                    file={file}
                    onLoadSuccess={onDocumentLoadSuccess}
                    renderMode="canvas"
                    className="custom-class-name-1"
                  >
                    <Page
                      pageNumber={pageNumber}
                      width={300}
                      height={200}
                      className={""}
                    />
                  </Document>

                  <div className="flex gap-4   items-center justify-center ">
                    <button
                      onClick={prevPage}
                      disabled={pageNumber <= 1}
                      className="bg-blue-500 text-white px-2 py-1 rounded-md cursor-pointer"
                    >
                      <MoveLeft size={15} />
                    </button>
                    <p className="text-gray-600 text-xs">
                      Page {pageNumber} of {numPages}
                    </p>
                    <button
                      onClick={nextPage}
                      disabled={pageNumber >= numPages}
                      className="bg-blue-500 text-white px-2 py-1 rounded-md cursor-pointer"
                    >
                      <MoveRight size={15} />
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </aside>

        {/* Fixed chat input at   the bottom */}
        <aside className="col-span-8 h-full bg-gray-100 p-2 flex flex-col justify-end overflow-scroll overflow-y-clip scroll-m-1 chat-container ">
          <h2 className="text-xl font-semibold mb-4">Chat with AI</h2>
          {/* Chat messages */}
          <div className="flex-grow overflow-y-scroll chat-container overflow-clip scroll-m-1 mb-4">
            {/* Chat messages will be displayed here */}

            {chatMessages.map((msg, idx) => (
              <ChatBuble key={idx} aiMsg={msg} isAi={msg.type} />
            ))}
            {loading && (
              <ChatBuble aiMsg={{ message: "Typing..." }} isAi={"ai"} />
            )}
            {/* Scroll target */}
            <div ref={bottomRef} />
          </div>

          <div className="w-full p-2 bg-white rounded-lg border-t flex gap-4 justify-between items-center ">
            <label
              htmlFor="file-upload"
              className="flex flex-col items-center justify-center  border-gray-400 rounded-lg cursor-pointer hover:border-blue-500 transition p-[2px] h-auto"
            >
              <FaFileUpload size={25} className="text-gray-400" />
              <input
                id="file-upload"
                type="file"
                accept="application/pdf"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
            <form onSubmit={handleInput} className="w-full flex gap-4">
              <input
                className="w-full h-12  outline-0 ring-0 border-0 border-gray-300 rounded-md focus:outline-none "
                type="text"
                name="prompt"
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
