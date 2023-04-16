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
      <Weather temp="3" format="°C" wind={5} humidity={75} />
      <Forecast />
      <Footer />
    </div>
  </StrictMode>
);
