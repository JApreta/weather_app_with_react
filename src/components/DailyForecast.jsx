import React from "react";
export  function DailyForecast(props) {

  function day() {
    const date = new Date(props.data.dt * 1000);
    const day = date.getDay();

    const Weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return Weekdays[day];
  }

  return (
    <div>
      <div>{day()}</div>
     <img
              id="main_img" className="img-fluid float-start"
              src={`${props.data.weather[0].icon}.svg`}
            alt="clear"
          />
          
      <div >
        <span >
          {`${Math.round(props.data.temp.max)}°`}
        </span> | &nbsp;
        <span >
          {`${Math.round(props.data.temp.min)}°`}
        </span>
      </div>
    </div>
  );
}