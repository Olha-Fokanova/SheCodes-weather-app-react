import React from "react";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./Header";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Footer from "./Footer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="container">
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  </StrictMode>
);
