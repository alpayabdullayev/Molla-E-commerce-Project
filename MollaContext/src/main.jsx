import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MainProvider from "./context/MainContext.jsx";
import BasketProvider from "./context/BasketContext.jsx";
import WishlistProvider from "./context/WishlistContext.jsx";
import DarkModeProvider from "./context/DarkModeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BasketProvider>
      <WishlistProvider>
        <DarkModeProvider>
          <MainProvider>
            <App />
          </MainProvider>
        </DarkModeProvider>
      </WishlistProvider>
    </BasketProvider>
  </React.StrictMode>
);
