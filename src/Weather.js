import React, { useState } from "react";
import Temperature from "./Temperature";

export default function Weather(props) {
  const windDirStyle = `rotate(${props.data.windDirection ?? 0}deg)`;

  return (
    <section className="main-section">
      <div className="main-section-container">
        <Temperature
          temp={props.data.temperature}
          format={props.data.format}
          icon={props.data.icon}
        />

        <div className="humidity-wind-container">
          <div className="humidity">
            Humidity: <span id="humidity">{props.data.humidity}</span>%
          </div>
          <div className="wind">
            Wind: <span id="wind">{props.data.wind}</span> km/h
            <span id="wind-direction" style={{ transform: windDirStyle }}>
              ⬇️
            </span>
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
