import React from "react";

const FeaturesSection: React.FC = () => (
  <section id="features" className="bg-neutral-800 py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white mb-4">
          Powerful Features
        </h2>
        <p className="text-xl text-gray-300">
          Everything you need to transform your customer service
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "24/7 Availability",
            description:
              "Always-on customer support that handles inquiries instantly, any time of day.",
            iconPath:
              "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z",
          },
          {
            title: "Custom Training",
            description:
              "AI trained on your specific products, policies, and brand voice for accurate responses.",
            iconPath:
              "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
          },
          {
            title: "Seamless Integration",
            description:
              "Effortlessly integrates with your Shopify store and existing tools for a hassle-free setup.",
            iconPath: "M5 13l4 4L19 7M5 13V9m0 4l4-4",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-neutral-900 p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-300"
          >
            <div className="text-blue-500 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={feature.iconPath}
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              {feature.title}
            </h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
