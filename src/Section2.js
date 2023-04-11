import React from "react";

export default function Section2() {
  return (
    <section className="main-section">
      <div className="main-section-container">
        <div className="info-container">
          <div className="weather-icon"></div>
          <span className="number" id="temp-integer">
            +3
          </span>
          <a href="#" className="degree active" id="celsius">
            °C
          </a>
          <span className="degree-slash">/</span>
          <a href="#" className="degree" id="fahrenheit">
            °F
          </a>
        </div>
        <div className="humidity-wind-container">
          <div className="humidity">
            Humidity: <span id="humidity">75</span>%
          </div>
          <div className="wind">
            Wind: <span id="wind">5</span> km/h
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
