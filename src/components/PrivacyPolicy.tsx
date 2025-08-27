import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy: React.FC = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Privacy Policy
          </h1>

          <p className="text-gray-600 mb-6">
            <strong>Effective Date:</strong> January 1, 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Information We Collect
            </h2>
            <p className="text-gray-700 mb-4">
              At ChatBay, we collect information to provide better services to
              our users. We collect information in the following ways:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>
                Information you give us directly when you use our chatbot
                services
              </li>
              <li>
                Information we get from your use of our services, including chat
                logs and interaction data
              </li>
              <li>
                Technical information such as your IP address, browser type, and
                device information
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. How We Use Information
            </h2>
            <p className="text-gray-700 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Provide, maintain, and improve our house help services</li>
              <li>Process transactions and send related information</li>
              <li>
                Send technical notices, updates, security alerts, and support
                messages
              </li>
              <li>
                Respond to comments, questions, and provide customer service
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Information Sharing
            </h2>
            <p className="text-gray-700 mb-4">
              We do not sell, trade, or otherwise transfer your personal
              information to third parties without your consent, except as
              described in this policy. We may share information in the
              following situations:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>With your consent or at your direction</li>
              <li>
                For legal reasons, such as to comply with a subpoena or court
                order
              </li>
              <li>
                To protect the rights, property, or safety of ChatBay, our
                users, or others
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Data Security
            </h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. However, no method of
              transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Your Rights
            </h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Access, update, or delete your personal information</li>
              <li>Opt out of certain communications from us</li>
              <li>Request a copy of your personal information</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Changes to This Policy
            </h2>
            <p className="text-gray-700 mb-4">
              We may update this privacy policy from time to time. We will
              notify you of any changes by posting the new privacy policy on
              this page and updating the effective date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Contact Us
            </h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this privacy policy or our
              practices, please contact us at:
            </p>
            <p className="text-gray-700">
              Email: privacy@chatbay.com
              <br />
              Address: ChatBay Inc., 123 Tech Street, Digital City, DC 12345
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

export default PrivacyPolicy;
