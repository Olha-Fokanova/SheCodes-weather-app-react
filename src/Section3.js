import React from "react";

export default function Section3() {
  return (
    <footer>
      <div className="footer-container" id="hours">
        <div className="hour-temperature-container" id="hour1">
          <div className="hour">15:00</div>
          <div className="emoji-2">⛈️</div>
          <div className="degrees">+3°C</div>
        </div>

        <div className="hour-temperature-container" id="hour2">
          <div className="hour">18:00</div>
          <div className="emoji-2">🌧️</div>
          <div className="degrees">+1°C</div>
        </div>

        <div className="hour-temperature-container" id="hour3">
          <div className="hour">21:00</div>
          <div className="emoji-2">☁️</div>
          <div className="degrees">+1°C</div>
        </div>

        <div className="hour-temperature-container" id="hour4">
          <div className="hour">00:00</div>
          <div className="emoji-2">🌙</div>
          <div className="degrees">-2°C</div>
        </div>
      </div>

      <div className="footer-container hidden" id="days">
        <div className="hour-temperature-container" id="day1">
          <div className="hour">Mon</div>
          <div className="emoji-2">⛈️</div>
          <div className="degrees">+3°C</div>
        </div>

        <div className="hour-temperature-container" id="day2">
          <div className="hour">Tue</div>
          <div className="emoji-2">🌧️</div>
          <div className="degrees">+1°C</div>
        </div>

        <div className="hour-temperature-container" id="day3">
          <div className="hour">Wed</div>
          <div className="emoji-2">☁️</div>
          <div className="degrees">+1°C</div>
        </div>

        <div className="hour-temperature-container" id="day4">
          <div className="hour">Thu</div>
          <div className="emoji-2">🌙</div>
          <div className="degrees">-2°C</div>
        </div>
      </div>
    </footer>
  );
}
