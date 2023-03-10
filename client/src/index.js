import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { MoviesContextProvider } from "./context/MoviesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MoviesContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </MoviesContextProvider>
  </React.StrictMode>
);
