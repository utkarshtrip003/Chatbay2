import React, { memo } from "react";

const ChatMessages = memo(
  ({
    messages,
    isTyping,
    messagesEndRef,
  }: {
    messages: { role: string; text: string }[];
    isTyping: boolean;
    messagesEndRef: React.RefObject<HTMLDivElement>;
  }) => (
    <div className="p-4 space-y-4 h-72 overflow-y-auto">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex ${
            message.role === "user" ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`${
              message.role === "user"
                ? "bg-[#60BBFE] text-white ml-auto mr-4 ml-4"
                : "bg-[#6168FF] text-white mr-auto ml-4 mr-16"
            } px-4 py-2 rounded-lg max-w-xs`}
          >
            {message.text}
          </div>
        </div>
      ))}

      {/* Typing Indicator */}
      {isTyping && (
        <div className="flex justify-start ml-4">
          <div className="bg-gray-100 px-4 py-2 rounded-lg max-w-xs flex items-center space-x-2">
            <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce-dot-1"></span>
            <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce-dot-2"></span>
            <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce-dot-3"></span>
          </div>
        </div>
      )}

      {/* Invisible Spacer */}
      <div ref={messagesEndRef} className="h-16"></div>
    </div>
  )
);

export default ChatMessages;
