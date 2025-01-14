// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// // import { createRoot } from "react-dom/client";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// // const rootElement = document.getElementById("root");
// // const root = createRoot(rootElement);

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App";
// import { Analytics } from "@vercel/analytics/react";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//     <Analytics />
//   </StrictMode>
// );

// import React from "react";
// import ReactDOM from "react-dom/client"; // Correct import for React 18
// import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom"; // Legacy import for React 17 and earlier
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
