import React, { useState } from "react";
import Temperature from "./Temperature";

export default function Weather(props) {
  return (
    <section className="main-section">
      <div className="main-section-container">
        <Temperature temp={props.data.temperature} format={props.data.format} />

        <div className="humidity-wind-container">
          <div className="humidity">
            Humidity: <span id="humidity">{props.data.humidity}</span>%
          </div>
          <div className="wind">
            Wind: <span id="wind">{props.data.wind}</span> km/h
            <span id="wind-direction">⬇️</span>
          </div>
        </div>
        <div className="rectangle-btn-container">
          <button className="rectangle-btn active" id="hour-button">
            Hours
          </button>
          <button className="rectangle-btn" id="day-button">
            Days
          </button>
        </div>
      </div>
    </section>
  );
}
