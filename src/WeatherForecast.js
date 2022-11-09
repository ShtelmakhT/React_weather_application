import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setloaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  useEffect(() => {
    setloaded(false);
  }, [props.data.coord]);

  function handleCoord(response) {
    setForecast(response.data.daily);
    setloaded(true);
  }
  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay dataDaily={dailyForecast} />{" "}
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let lon = props.data.coord.lon;
    let lat = props.data.coord.lat;
    // let apiKey = "8433bdf9dde0191b5fd72b3b69889784";
    let apiKey = "8433bdf9dde0191b5fd72b3b69889784";
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleCoord);
    return null;
  }
}
