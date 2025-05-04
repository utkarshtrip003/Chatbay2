import React from "react";

const HeroSection: React.FC = () => {
  const handleClick = () => {
    window.open("https://calendly.com/utkarsh-chatbay/30min", "_blank");
  };

  return (
    <section
      id="hero"
      className="bg-neutral-900 min-h-[70vh] flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your{" "}
              <span className="text-blue-500">Customer Service</span> with
              ChatBay
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Intelligent AI-powered chatbot solution tailored for Shopify
              stores. Enhance customer experience with 24/7 support.
            </p>
            <div className="flex w-full">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium w-full m-2"
                onClick={handleClick}
              >
                Schedule Your Free Strategy Call
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://cdn.shopify.com/b/shopify-brochure2-assets/988b6738089b476b12bb11624047cbee.png"
              alt="ChatBay Interface"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
