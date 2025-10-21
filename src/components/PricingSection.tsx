import React from "react";

const PricingSection: React.FC = () => {
  const handleClick = () => {
    window.open("https://calendly.com/utkarsh-chatbay/30min", "_blank");
  };

  return (
    <section id="pricing" className="bg-neutral-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-300">
            Choose the perfect plan for your business
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Starter",
              price: "₹2000",
              features: [
                "Up to 1,000 conversations/month",
                "Basic AI Training",
              ],
            },
            {
              name: "Professional",
              price: "₹5000",
              features: [
                "Up to 5,000 conversations/month",
                "Advanced AI Training",
                "Priority Support",
              ],
              popular: true,
            },
            {
              name: "Enterprise",
              price: "Custom",
              features: [
                "Everything in Professional",
                "Custom AI Training",
                "Dedicated Support",
                "Unlimited Conversations",
              ],
            },
          ].map((plan, index) => (
            <div
              key={index}
              className={`bg-neutral-800 rounded-2xl p-8 border-2 ${
                plan.popular
                  ? "border-blue-500 transform scale-105"
                  : "border-transparent hover:border-blue-500"
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  MOST POPULAR
                </div>
              )}
              <div className="text-center mt-4 mb-4">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {plan.name}
                </h3>
                <div className="text-5xl font-extrabold text-white">
                  {plan.price}
                </div>
                {plan.price !== "Custom" && (
                  <span className="text-gray-400">/month</span>
                )}
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <svg
                      className="h-5 w-5 text-blue-500 mr-3"
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
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={handleClick}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-all duration-300"
              >
                {plan.price === "Custom"
                  ? "Book Free Call Now"
                  : "Book Free Call Now"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
