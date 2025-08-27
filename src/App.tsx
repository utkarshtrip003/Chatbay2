import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Chatbot from "./Chatbot";
import ChatbayLandingPage from "./components/Chatbay";
import WorkerHubLanding from "./components/WorkerHubLanding";
import PrivacyPolicy from "./components/PrivacyPolicy";
import AboutUs from "./components/AboutUs";
import TermsAndConditions from "./components/TermsAndConditions";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main landing page */}
        <Route path="/" element={<ChatbayLandingPage />} />
        {/* WorkerHub landing page */}

        {/* Route for the chatbot */}
        <Route path="/chatbot" element={<Chatbot />} />

        <Route path="/workerhub" element={<WorkerHubLanding />} />

        {/* Quick Help routes */}
        <Route path="/quickhelp/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/quickhelp/about-us" element={<AboutUs />} />
        <Route
          path="/quickhelp/terms-and-condition"
          element={<TermsAndConditions />}
        />
      </Routes>
    </Router>
  );
}

export default App;
