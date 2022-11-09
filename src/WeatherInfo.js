import React from "react";
import'./index.css';
//import WeatherIcon from "./WeatherIcon";
// import FormattedDate from "./FormattedDate";


// function importAll(r) {
//   let images = {};
//    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
//   return images
//  }
//  const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));


export default function WeatherInfo(props){
    return(

     <div className="WeatherInfo">
        
        <div className="row">
              <div className="col-6">
                <div className="temperature row">
                  <div className="col-4">
                     <img className="current-weather-icon" src={props.data.icon} alt="" />
                    {/* <img className="current-weather-icon" src={props.data.icon} alt="" /> */}
                    {/* {console.log(props.data.iconName +'.png')};
                    {console.log("k3k3")};
                    <img className="current-weather-icon" src={images[props.data.iconName +'.png']} alt="" /> */}
                    <div className="current-weather-icon">
                      {/* <WeatherIcon code={props.data} /> */}
                      </div>
                  </div>

                  <div className="col-8">
                    <span className="temp">{props.data.temperature}</span>
                    <span className="unit col-1">°C</span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="list">
                  <ul>
                    <li> {props.data.description}</li>
                    <li>Humidity: {props.data.humidity} %</li>
                    <li>Wind: {props.data.wind} m/h</li>
                  </ul>
                </div>
              </div>
            </div>
     </div>

    )
}