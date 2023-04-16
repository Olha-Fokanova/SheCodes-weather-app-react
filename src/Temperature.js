import React, { useState } from "react";

export default function Temperature(props) {
  const temp = props.temp;
  const icon = props.icon;

  let [format, setFormat] = useState(props.format);

  function changeToCelsius(event) {
    event.preventDefault();
    setFormat("°C");
  }

  function changeToFahrenheit(event) {
    event.preventDefault();
    setFormat("°F");
  }

  if (format === "°C") {
    return (
      <div className="info-container">
        <div className="weather-icon">
          <img src={icon} />
        </div>

        <span className="number" id="temp-integer">
          {temp}
          {format}
        </span>

        <a href="#" className="degree active" id="celsius">
          °C
        </a>

        <span className="degree-slash">/</span>

        <a href="#" className="degree" onClick={changeToFahrenheit}>
          °F
        </a>
      </div>
    );
  } else {
    let fahrenheit = Math.round(temp * 1.8 + 32);
    return (
      <div className="info-container">
        <div className="weather-icon"></div>

        <span className="number" id="temp-integer">
          {fahrenheit}
          {format}
        </span>

        <a href="#" className="degree" onClick={changeToCelsius}>
          °C
        </a>

        <span className="degree-slash">/</span>

        <a href="#" className="degree active">
          °F
        </a>
      </div>
    );
  }
}
