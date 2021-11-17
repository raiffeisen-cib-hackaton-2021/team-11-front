import { StrictMode } from "react";
import { render } from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);
