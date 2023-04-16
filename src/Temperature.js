import React, { useState } from "react";

export default function Temperature(props) {
  let [temp, setTemp] = useState(props.temp);
  let [format, setFormat] = useState(props.format);

  function changeToCelsius(event) {
    event.preventDefault();
    setTemp(Math.round((temp - 32) / 1.8));
    setFormat("°C");
  }

  function changeToFahrenheit(event) {
    event.preventDefault();
    setTemp(Math.round(temp * 1.8 + 32));
    setFormat("°F");
  }

  if (format === "°C") {
    return (
      <div className="info-container">
        <div className="weather-icon"></div>

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
    return (
      <div className="info-container">
        <div className="weather-icon"></div>

        <span className="number" id="temp-integer">
          {temp}
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
