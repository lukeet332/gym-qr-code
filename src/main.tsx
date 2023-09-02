import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Router } from "./Router";
import { Layout } from "./Layout";
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Layout>
        <Router />
      </Layout>
    </ThemeProvider>
  </React.StrictMode>
);
