import React from "react";
import { Link } from "react-router-dom";

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-xl font-bold hover:text-blue-200">
              Quick Help
            </Link>
            <nav>
              <Link to="/" className="hover:text-blue-200">
                Back to Home
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 mb-4">
              At Quick Help, we're revolutionizing home services by connecting
              you with trusted house help in just 10 minutes. Our mission is to
              make quality home assistance accessible, reliable, and incredibly
              fast for busy families and individuals.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              What We Do
            </h2>
            <p className="text-gray-700 mb-4">
              Quick Help provides instant access to verified house help services
              that transform your daily life:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>House cleaning and deep cleaning services</li>
              <li>Cooking and meal preparation by skilled chefs</li>
              <li>Child care and babysitting services</li>
              <li>Elderly care and companionship</li>
              <li>Laundry, ironing, and garment care</li>
              <li>Gardening and outdoor maintenance</li>
              <li>Grocery shopping and errand running</li>
              <li>Home organization and decluttering</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Story
            </h2>
            <p className="text-gray-700 mb-4">
              Founded in 2024, Quick Help emerged from a simple frustration:
              finding reliable house help shouldn't take days or weeks. Our
              founders, busy professionals themselves, experienced the stress of
              managing households while juggling demanding careers. They
              envisioned a world where quality help could arrive at your
              doorstep in just 10 minutes.
            </p>
            <p className="text-gray-700 mb-4">
              What started as a local service in one city has grown into a
              nationwide network of trusted service providers. We've helped
              thousands of families reclaim their time and enjoy cleaner, more
              organized homes without the hassle of traditional hiring
              processes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Speed
                </h3>
                <p className="text-gray-700">
                  We deliver verified house help in 10 minutes or less, because
                  your time is precious.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Trust
                </h3>
                <p className="text-gray-700">
                  Every service provider is thoroughly vetted,
                  background-checked, and insured for your peace of mind.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Quality
                </h3>
                <p className="text-gray-700">
                  We maintain the highest standards through continuous training
                  and customer feedback.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Convenience
                </h3>
                <p className="text-gray-700">
                  Book services with just a few taps, track progress in
                  real-time, and pay seamlessly through the app.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-gray-700 mb-4">
              Our diverse team brings together expertise from home services,
              technology, operations, and customer care. We're passionate about
              creating solutions that give people more time to focus on what
              matters most - their families, careers, and personal well-being.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Looking Forward
            </h2>
            <p className="text-gray-700 mb-4">
              As we continue to grow, we remain committed to our core mission:
              making quality house help accessible in just 10 minutes. We're
              expanding to new cities, adding more service categories, and
              developing innovative features that will make home management even
              easier.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-700 mb-4">
              We'd love to hear from you! Whether you're interested in our
              services, have questions, or want to join our team, don't hesitate
              to reach out.
            </p>
            <p className="text-gray-700">
              Email: hello@quickhelp.com
              <br />
              Phone: 1-800-QUICK-HELP (1-800-784-2543)
              <br />
              Emergency Support: Available 24/7 through the app
              <br />
              Address: Quick Help Inc., 456 Service Plaza, Helper City, HC 67890
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2025 Quick Help. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
