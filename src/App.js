import React from "react";

import Header from "./Header";
import SearchForm from "./SearchForm";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Footer from "./Footer";

import "./styles.css";

export default function App(props) {
  return (
    <div className="container">
      <Header city="Poltava" weatherDesc="Overcast clouds" />
      <SearchForm />
      <Weather temp="3" format="°C" wind={5} humidity={75} />
      <Forecast />
      <Footer />
    </div>
  );
}
