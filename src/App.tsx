import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Chatbot from "./Chatbot";
import ChatbayLandingPage from "./components/Chatbay";
import WorkerHubLanding from "./components/WorkerHubLanding";
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
      </Routes>
    </Router>
  );
}

export default App;
