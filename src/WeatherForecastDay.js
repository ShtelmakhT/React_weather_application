import React from "react";
export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temp = Math.round(props.dataDaily.temp.max);
    return `${temp}°`;
  }

  function minTemp() {
    let temp = Math.round(props.dataDaily.temp.min);
    return `${temp}°`;
  }

  function day() {
    let date = new Date(props.dataDaily.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  let icon = props.dataDaily.weather[0].icon;
  let icon_var = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className="col">
      <div className="WeatherForecast-Day"> {day()}</div>
      <img
        className="Current-weather-icon"
        src={icon_var}
        width="50"
        alt="weather forecast"
      />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max"> {maxTemp()}</span>
        <span className="WeatherForecast-temperature-max">/ {minTemp()} </span>
      </div>
    </div>
  );
}
