import React, { useState } from "react";

import FormatDate from "./FormatDate";

export default function Header(props) {
  return (
    <header className="Header">
      <div className="header-container">
        <h1 id="city-name">{props.city}</h1>

        <h2 id="date">{props.updated}</h2>
        <small>Last updated</small>
        <h3 id="description">{props.weatherDesc}</h3>
      </div>
    </header>
  );
}
