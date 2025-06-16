import React from "react";
import { Link } from "react-router-dom";

const WorkerHubLanding: React.FC = () => {
  const handleDownload = () => {
    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = "/downloads/workerhub.apk";
    link.download = "WorkerHub.apk"; // This will be the name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <Link
            to="/"
            className="text-white hover:text-blue-100 flex items-center space-x-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span>Back to Chatbay</span>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-6 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Your Gateway to <br />
              <span className="text-blue-200">Better Work Opportunities</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of workers who have found their dream jobs through
              WorkerHub
            </p>
            <button
              onClick={handleDownload}
              className="bg-white hover:bg-blue-50 text-blue-600 font-bold py-4 px-12 rounded-full text-lg transition duration-300 transform hover:scale-105 hover:shadow-xl flex items-center mx-auto space-x-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              <span>Download WorkerHub App</span>
            </button>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition duration-300">
              <div className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Find Work
              </h3>
              <p className="text-blue-100">
                Discover thousands of job opportunities tailored to your skills
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition duration-300">
              <div className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Manage Schedule
              </h3>
              <p className="text-blue-100">
                Organize your work hours and appointments efficiently
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition duration-300">
              <div className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Connect</h3>
              <p className="text-blue-100">
                Build relationships with employers and fellow workers
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6">
              <div className="text-4xl font-bold text-white mb-2">10K+</div>
              <div className="text-blue-200">Active Users</div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6">
              <div className="text-4xl font-bold text-white mb-2">5K+</div>
              <div className="text-blue-200">Job Listings</div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6">
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-blue-200">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerHubLanding;
