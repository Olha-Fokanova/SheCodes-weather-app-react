import React, { useState } from "react";
import axios from "axios";

import Header from "./Header";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Footer from "./Footer";
import FormatDate from "./FormatDate";

import "./styles.css";

export default function App(props) {
  const apiKey = "210d99196a88b9257ed8cb3535a0a0c5";

  let [city, setCity] = useState(props.city);

  let [weather, setWeather] = useState({
    city: "Poltava",
    temperature: "3",
    format: "°C",
    wind: 5,
    humidity: 75,
    description: "Overcast clouds",
    icon: "src/icons/01d.png",
    updated: FormatDate(),
  });

  function cityWeatherLookup(event) {
    event.preventDefault();

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(`${apiURL}&appid=${apiKey}`).then(handleApiResponse);
  }

  function geoWeatherLookup() {
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

      axios.get(`${apiURL}&appid=${apiKey}`).then(handleApiResponse);
    });
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleApiResponse(response) {
    setWeather({
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      icon: `src/icons/${response.data.weather[0].icon}.png`,
      updated: FormatDate(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      windDirection: `rotate(${response.data.wind.deg}deg)`,
    });

    setCity(response.data.name);
  }

  return (
    <div className="container">
      <Header
        city={weather.city}
        updated={weather.updated}
        weatherDesc={weather.description}
      />

      <section className="main-section">
        <div className="main-section-container">
          <form action="" onSubmit={cityWeatherLookup}>
            <input
              type="text"
              placeholder="🔍 Enter your city"
              onChange={handleCityChange}
            />

            <div className="btn-container">
              <button className="button" type="submit">
                Search
              </button>

              <button
                className="button"
                type="button"
                onClick={geoWeatherLookup}
              >
                Current
              </button>
            </div>
          </form>
        </div>
      </section>

      <Weather data={weather} />
      <Forecast />
      <Footer />
    </div>
  );
}
