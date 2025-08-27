import React from "react";
import { Link } from "react-router-dom";

const TermsAndConditions: React.FC = () => {
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
            Terms and Conditions
          </h1>

          <p className="text-gray-600 mb-6">
            <strong>Effective Date:</strong> January 1, 2025
          </p>

          <p className="text-gray-700 mb-6">
            Welcome to Quick Help! These Terms and Conditions ("Terms") govern
            your use of the Quick Help mobile application and services. By using
            our app, you agree to these terms.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Service Description
            </h2>
            <p className="text-gray-700 mb-4">
              Quick Help is an on-demand house help platform that connects users
              with verified service providers for:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>House cleaning and maintenance</li>
              <li>Cooking and meal preparation</li>
              <li>Elderly care and companionship</li>
              <li>Child care and babysitting</li>
              <li>Laundry and ironing services</li>
              <li>Gardening and outdoor maintenance</li>
              <li>Grocery shopping and errands</li>
            </ul>
            <p className="text-gray-700 mb-4">
              We aim to connect you with qualified help within 10 minutes of
              your request, subject to availability in your area.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. User Responsibilities
            </h2>
            <p className="text-gray-700 mb-4">
              As a user of Quick Help, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>
                Provide accurate and complete information when creating your
                account
              </li>
              <li>Treat service providers with respect and professionalism</li>
              <li>Ensure a safe working environment for service providers</li>
              <li>Pay for services as agreed upon through the app</li>
              <li>
                Report any issues or concerns promptly through our support
                system
              </li>
              <li>
                Not use the platform for illegal or inappropriate activities
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Service Provider Standards
            </h2>
            <p className="text-gray-700 mb-4">
              All service providers on Quick Help are:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Background checked and verified</li>
              <li>Trained in their respective service areas</li>
              <li>Insured for liability coverage</li>
              <li>Required to maintain professional standards</li>
              <li>Monitored through our rating and review system</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Pricing and Payment
            </h2>
            <p className="text-gray-700 mb-4">
              - Service rates are displayed in the app before booking
            </p>
            <p className="text-gray-700 mb-4">
              - Payment is processed securely through the app
            </p>
            <p className="text-gray-700 mb-4">
              - Additional charges may apply for premium services or emergency
              requests
            </p>
            <p className="text-gray-700 mb-4">
              - Cancellation fees may apply for last-minute cancellations (less
              than 2 hours notice)
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Booking and Cancellation Policy
            </h2>
            <p className="text-gray-700 mb-4">
              <strong>Booking:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Services can be booked instantly or scheduled in advance</li>
              <li>Booking confirmation will be sent within 10 minutes</li>
              <li>Service providers will arrive within the agreed timeframe</li>
            </ul>
            <p className="text-gray-700 mb-4">
              <strong>Cancellation:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Free cancellation up to 2 hours before scheduled service</li>
              <li>50% charge for cancellations within 2 hours</li>
              <li>
                Full charge for no-shows or cancellations after service provider
                arrival
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Safety and Security
            </h2>
            <p className="text-gray-700 mb-4">
              Quick Help prioritizes your safety:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>All service providers undergo thorough background checks</li>
              <li>Real-time tracking of service providers</li>
              <li>24/7 customer support and emergency assistance</li>
              <li>In-app communication to maintain privacy</li>
              <li>Insurance coverage for all services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Liability and Insurance
            </h2>
            <p className="text-gray-700 mb-4">
              - Quick Help carries comprehensive liability insurance
            </p>
            <p className="text-gray-700 mb-4">
              - Service providers are covered for work-related incidents
            </p>
            <p className="text-gray-700 mb-4">
              - Users should report any damages or issues immediately
            </p>
            <p className="text-gray-700 mb-4">
              - Claims must be filed within 24 hours of service completion
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibent text-gray-900 mb-4">
              8. Quality Guarantee
            </h2>
            <p className="text-gray-700 mb-4">We stand behind our services:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>100% satisfaction guarantee on all services</li>
              <li>Free re-service if you're not satisfied</li>
              <li>Continuous monitoring and improvement of service quality</li>
              <li>Regular training and certification updates for providers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              9. Privacy and Data Protection
            </h2>
            <p className="text-gray-700 mb-4">
              Your privacy is important to us. Please review our Privacy Policy
              for details on how we collect, use, and protect your personal
              information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              10. Termination
            </h2>
            <p className="text-gray-700 mb-4">
              Quick Help reserves the right to terminate or suspend accounts
              that violate these terms or engage in inappropriate behavior.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              11. Contact Information
            </h2>
            <p className="text-gray-700 mb-4">
              For questions, support, or concerns:
            </p>
            <p className="text-gray-700">
              Email: support@quickhelp.com
              <br />
              Phone: 1-800-QUICK-HELP (1-800-784-2543)
              <br />
              Emergency Line: Available 24/7 through the app
              <br />
              Address: Quick Help Inc., 456 Service Plaza, Helper City, HC 67890
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              12. Changes to Terms
            </h2>
            <p className="text-gray-700 mb-4">
              We may update these Terms and Conditions periodically. Users will
              be notified of significant changes through the app or email.
              Continued use constitutes acceptance of updated terms.
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

export default TermsAndConditions;
