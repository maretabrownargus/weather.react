import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";
import Weather from "./Weather";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <h1> Weather App </h1>
    <Weather />
  </StrictMode>
);
