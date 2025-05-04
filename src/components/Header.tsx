import React from "react";
import ChatbotIcon from "../assets/ChatbotIcon";

const Header: React.FC = () => (
  <header className="relative z-50 bg-white dark:bg-gray-900">
    <nav className="fixed w-full z-50 bg-neutral-900/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <ChatbotIcon width={32} height={32} />
            <div className="text-2xl font-bold text-white">ChatBay</div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {["Home", "Features", "Benefits", "Pricing", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                    className="text-gray-300 hover:text-white px-3 py-2"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
