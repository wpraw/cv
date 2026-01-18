import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { ContactPage, HomePage, PlaygroundPage } from "./pages";
import "./index.css";
import ClickSpark from "./components/ClickSpark";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ClickSpark>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="/playground" element={<PlaygroundPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ClickSpark>
  </StrictMode>
);
