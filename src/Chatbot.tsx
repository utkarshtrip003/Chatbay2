import { useEffect, useState, useRef, RefObject } from "react";
import axios from "axios";
import { ChatbotIcon } from "./assets/ChatbotIcon";
import ChatMessages from "./ChatMessages";
import React from "react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi 👋 I am Chatbay, how can I help you?" },
  ]);
  const [input, setInput] = useState("");
  const [threadId, setThreadId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [assistantId, setAssistantId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Extract assistant_id from query params
    const params = new URLSearchParams(window.location.search);
    const id = params.get("assistant_id");
    if (id) {
      setAssistantId(id);
    } else {
      console.error("No assistant_id provided in URL.");
    }
  }, []);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const toggleChatbox = () => {
    setIsOpen(!isOpen);
    if (!threadId) createThread();
  };

  const createThread = async () => {
    try {
      const response = await axios.post(
        "https://api.chatbay.in/api/chat/create-thread/",
        {},
        { headers: { "Content-Type": "application/json" } }
      );
      setThreadId(response.data.id);
    } catch (error) {
      console.error("Error creating thread:", error);
    }
  };

  const sendMessage = async (message: string) => {
    if (!threadId) {
      console.error("Thread ID is not initialized.");
      return;
    }
    if (!assistantId) {
      console.error("Assistant ID is not initialized.");
      return;
    }

    setLoading(true); // Start loading
    scrollToBottom(); // Scroll immediately when loading starts

    setMessages((prev) => [...prev, { role: "user", text: message }]);

    try {
      const response = await axios.post(
        "https://api.chatbay.in/api/chat/send-message/",
        {
          thread_id: threadId,
          message: {
            role: "user",
            content: [{ type: "text", text: message }],
          },
          details: {
            assistant_id: assistantId,
            stream: true,
            tool_choice: null,
          },
        },
        { headers: { "Content-Type": "application/json" } }
      );
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: response.data.text_value },
      ]);
      setLoading(false); // Stop loading
      scrollToBottom(); // Scroll to show the bot response
    } catch (error) {
      console.error("Error sending message:", error);
      setLoading(false);
    }
  };

  const handleSendClick = () => {
    if (input.trim()) {
      sendMessage(input);
      setInput("");
    }
  };

  const handleSendKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim()) {
      sendMessage(input);
      setInput("");
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chatbot Icon Button */}
      <button
        className="bg-[#6168FF] p-3 rounded-full shadow-lg"
        onClick={toggleChatbox}
      >
        <ChatbotIcon width={32} height={32} />
      </button>

      {/* Chatbox */}
      {isOpen && (
        <div className="sm:w-screen md:w-96 lg:w-96 bg-white shadow-lg rounded-lg overflow-hidden mt-2">
          {/* Header */}
          <div className="bg-[#6168FF] text-white flex items-center justify-between p-4">
            <div className="flex items-center">
              <ChatbotIcon width={32} height={32} />
              <p className="font-semibold text-lg ml-2">Chatbot</p>
            </div>
            <button className="text-white" onClick={toggleChatbox}>
              X
            </button>
          </div>

          {/* Chat Messages */}
          <ChatMessages
            messages={messages}
            isTyping={loading}
            messagesEndRef={messagesEndRef as RefObject<HTMLDivElement>}
          />

          {/* Input Section */}
          <div className="flex items-center border-t border-gray-300 p-2">
            <input
              type="text"
              placeholder="Message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleSendKeyPress}
              className="flex-grow border-none focus:outline-none px-2"
            />
            <button
              className="bg-[#6168FF] text-white px-4 py-2 rounded-lg"
              onClick={handleSendClick}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
