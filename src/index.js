import React from "react";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./Header";
import SearchForm from "./SearchForm";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Footer from "./Footer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="container">
      <Header />
      <SearchForm />
      <Weather />
      <Forecast />
      <Footer />
    </div>
  </StrictMode>
);
