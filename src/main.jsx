import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import { LocalStateProvider } from "./store/context/LocalStateProvider.jsx";

import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <LocalStateProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </LocalStateProvider>
  </BrowserRouter>,
);
