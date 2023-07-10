import "./index.css";
import React from "react";
import App from "./App.tsx";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
