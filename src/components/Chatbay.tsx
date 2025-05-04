import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import BenefitsSection from "./BenefitsSection";
import PricingSection from "./PricingSection";
import ContactSection from "./ContactSection";

const ChatbayLandingPage: React.FC = () => (
  <div className="antialiased text-gray-800 min-h-screen flex flex-col">
    {/* Header */}
    <Header />

    {/* Main Content */}
    <main id="main-content" className="flex-1">
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <PricingSection />
      <ContactSection />
    </main>

    {/* Chatbot iframe positioned in the bottom-right corner */}
    <div
      style={{
        position: "fixed",
        bottom: "0px", // Distance from bottom
        right: "0px", // Distance from right
        width: "400px", // Width of the chatbot iframe
        height: "500px", // Height of the chatbot iframe
        borderRadius: "12px", // Rounded corners
        overflow: "hidden", // Ensures content stays within the frame
        zIndex: 1000, // Ensures the iframe is above other content
      }}
    >
      <iframe
        src="/chatbot/?assistant_id=asst_d19qedXLLWno0TT0dztAJwe7"
        width="100%"
        height="100%"
        frameBorder="0"
        title="Chatbot"
        style={{
          border: "none",
          borderRadius: "12px",
        }}
      ></iframe>
    </div>

    {/* Footer */}
    <footer className="bg-neutral-900 pt-12 pb-8 text-gray-400 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p>© 2025 ChatBay. All rights reserved.</p>
      </div>
    </footer>
  </div>
);

export default ChatbayLandingPage;
