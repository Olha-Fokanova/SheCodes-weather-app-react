import React from "react";
import "./styles.css";

export default function Header() {
  return (
    <header className="Header">
      <div className="header-container">
        <h1 id="city-name">Poltava</h1>

        <h2 id="date">Sunday, December 4, 14:18</h2>
        <small>Last updated</small>
        <h3 id="description"></h3>
      </div>
    </header>
  );
}
