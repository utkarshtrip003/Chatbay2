import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Chatbot from "./Chatbot";
import ChatbayLandingPage from "./components/Chatbay";
import React from "react";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the landing page */}
        <Route path="/" element={<ChatbayLandingPage />} />

        {/* Route for the chatbot */}
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </Router>
  );
}

export default App;
