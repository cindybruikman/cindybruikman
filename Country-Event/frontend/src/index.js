import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

//Creëer een root element om de applicatie weer te geven.
const root = ReactDOM.createRoot(document.getElementById("root"));
//Render de applicatie binnen het root element.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
