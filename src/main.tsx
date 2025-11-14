import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.tsx";

const prefersDark =
  globalThis.matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? false;
document.documentElement.classList.add(prefersDark ? "dark" : "light");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
