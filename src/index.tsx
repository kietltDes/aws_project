import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Homepage } from "./screens/Homepage";
import { ThankYou } from "./screens/ThankYou";
import "./fonts/fonts.css";

 
createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  </StrictMode>,
);