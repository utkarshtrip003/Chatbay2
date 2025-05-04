import React from "react";

const BenefitsSection: React.FC = () => (
  <section id="benefits" className="bg-neutral-800 py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white mb-4">
          Why Choose ChatBay?
        </h2>
        <p className="text-xl text-gray-300">
          Transform your customer service and boost your business
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-12">
        {[
          {
            title: "Reduce Support Costs",
            points: [
              "Cut customer service costs by up to 70%",
              "Handle unlimited conversations simultaneously",
              "Automate repetitive inquiries",
            ],
            imgSrc:
              "https://cdn.shopify.com/b/shopify-brochure2-assets/51c6fc4dc5e0613817177942cc009fd8.png",
          },
          {
            title: "Improve Customer Experience",
            points: [
              "Instant responses 24/7",
              "Personalized customer interactions",
              "Multi-language support",
            ],
            imgSrc:
              "https://cdn.shopify.com/b/shopify-brochure2-assets/e45ccb23cd41af43c481aac46124b2f0.jpg",
          },
        ].map((benefit, index) => (
          <div
            key={index}
            className="bg-neutral-900 rounded-2xl overflow-hidden"
          >
            <img
              src={benefit.imgSrc}
              alt={benefit.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                {benefit.title}
              </h3>
              <ul className="space-y-4">
                {benefit.points.map((point, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <svg
                      className="h-6 w-6 text-blue-500 mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
