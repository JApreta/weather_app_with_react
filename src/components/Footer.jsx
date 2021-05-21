import React from "react";
export function Footer() {

  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  function showCurrentTime() {
    let currentDate = new Date();
    return(
      `Last Update at ${ weekdays[currentDate.getDay()] }
  ${currentDate.getHours().toString().padStart(2, '0')}:${
  currentDate.getMinutes().toString().padStart(2, '0')}`
    );
}
  
 
  return (
    <div className="col-md-12 float-right">
      <br />
      <h2 id="date_time">{showCurrentTime()}</h2>
      <a id="git" href="https://github.com/JApreta/weather_app_with_react">
        Checkout Git Repo
      </a>
    </div>
  );
}
