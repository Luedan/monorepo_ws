import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RouterCustomProvider from './router/routerProvider';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterCustomProvider />
  </React.StrictMode>
);
