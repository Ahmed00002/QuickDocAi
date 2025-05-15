import Upload from "@/components/ui/Upload";
import { MoveLeft, MoveRight, SendHorizonal } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import ChatBuble from "./ChatBuble";
import { Document, Page } from "react-pdf";
import { FaFileUpload } from "react-icons/fa";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { MdCancel } from "react-icons/md";
import { toast } from "react-toastify";

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

  // delete uploaded fule
  const cancelFile = () => {
    setFile(null);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    toast.success("File loaded successfully");
    setNumPages(numPages);
  };

  // ask ai with with file
  const handleFileUpload = (e) => {
    e.preventDefault();
    setLoading(true);
    const file = e.target.files[0];
    setFile(file);
    try {
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        // this request will perform instantly when a user upload a file.
        axiosSecure
          .post("/analyze-pdf", formData)
          .then((res) => {
            setLoading(false);

            setChatMessages((prev) => [
              ...prev,
              {
                type: "ai",
                message: res.data,
              },
            ]);
          })
          .catch(() => {
            toast.error("QuickDoc ai not responding. Try again.");
            setLoading(false);
          });
      }
    } catch {
      toast.error("Failed to ask QuickDock Ai");
      setLoading(false);
    }
  };

  // ask ai without file
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
    try {
      if (file) {
        axiosSecure
          .post(`/analyze-pdf?prompt=${prompt}`, data)
          .then((res) => {
            setChatMessages;
            setLoading(false);

            setChatMessages((prev) => [
              ...prev,
              {
                type: "ai",
                message: res.data,
              },
            ]);
          })
          .catch(() => {
            toast.error("QuickDoc ai not responding. Try again.");
            setLoading(false);
          });
      } else {
        axiosSecure
          .get(`/chat?prompt=${prompt}`)
          .then((res) => {
            setLoading(false);
            setChatMessages((prev) => [
              ...prev,
              {
                type: "ai",
                message: res.data,
              },
            ]);
          })
          .catch(() => {
            toast.error("QuickDoc ai not responding. Try again.");
            setLoading(false);
          });
      }
    } catch {
      toast.error("Failed to ask QuickDock Ai");
      setLoading(false);
    }
  };
  return (
    <div className="h-[calc(100vh-70px)] md:h-[calc(100vh-80px)] flex flex-col">
      {/* Chat content goes here */}
      <section className="h-full grid grid-cols-1 md:grid-cols-12 ">
        {/* Left side: Document preview */}
        <aside className="col-span-4 hidden md:flex md:flex-col bg-gray-100 p-2 overflow-hidden ">
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
                    onLoadError={() => {
                      toast.error("failed to load pdf");
                    }}
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
        <aside className="md:col-span-8 md:h-full bg-gray-100 p-2 flex flex-col justify-end overflow-scroll overflow-y-clip  chat-container ">
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

          <div className="w-full p-2 bg-white rounded-lg border-t flex gap-4 justify-between items-center relative ">
            {/* file view for mobile */}
            {file && (
              <>
                <div className="absolute left-0 bottom-full bg-white max-w-7/12 -translate-y-1 px-2 py-[5px] rounded-lg flax md:hidden">
                  <div className="flex gap-2 text-ellipsis items-center">
                    <p className="flex-grow text-xs">{file?.name}</p>{" "}
                    <MdCancel onClick={cancelFile} className="cursor-pointer" />
                  </div>
                </div>
              </>
            )}

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
