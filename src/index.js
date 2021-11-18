import { StrictMode } from "react";
import { render } from "react-dom";
import "modern-normalize/modern-normalize.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { StyleSheetManager } from "styled-components";
render(
  <StrictMode>
    <BrowserRouter>
      <StyleSheetManager disableVendorPrefixes>
        <App />
      </StyleSheetManager>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);
