import React from "react";

export function Details(props) {
  return (
    <div className="col-4 details">
      <span id="wind">Wind Speed: { props.windSpeed}km/hr</span>
      <br />
      <span id="humidity">Humidity: { props.HumidityVal}%</span>
    </div>
  );
}
