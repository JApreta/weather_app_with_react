import React, { useState } from "react";


export function City(props) {

  const [temp, setTemp] = useState(props.temperatureVal);
  const [isActive, setActive] = useState(false);
  const [isCelcius, setIsCelcius] = useState(true);

  function convertToFarenheit(e) {
    e.preventDefault();
    setTemp(Math.round((props.temperatureVal * 9) / 5 + 32));
    setActive(!isActive);
    setIsCelcius(false);
    
  }

  function convertToCelcius(e) {
    e.preventDefault();
    setTemp(props.temperatureVal);
    setActive(!isActive);
    setIsCelcius(true);
    
  }
  return (
    <>
      <div className="col-md-12">
        <h3 id="displayCityName">{ props.cityN}</h3>
        <h4 id="description">{props.description}</h4>
      </div>
      <div className="col-6 mt-3">
        <div className="clearfix weather-temperature">
          <img
            id="main_img" className="img-fluid float-start"
            src={props.icon}
            alt="clear"
          />
          

      <div className="float-end">
      <strong id="temperature">{isCelcius ? props.temperatureVal:temp}</strong>
      <span id="units">
        <a id="showTempInC" rel="noopener noreferrer" href="./" className={isActive ?  null:'hide'} onClick={convertToCelcius}   >
         °C
        </a>
        &nbsp;
        <span id="showTempInC_span" className={isActive ?  'hide':null} >°C</span> |&nbsp;


        <a href="./" id="showTempInF" 
        onClick={convertToFarenheit}  className={isActive ?  'hide':null}>
          °F
           
        </a>
        &nbsp;
        <span id="showTempInF_span" className={isActive ?  null:'hide'}>
          °F
        </span>
        &nbsp;
      </span>
    </div>
        </div>
      </div>
    </>
  );
}
