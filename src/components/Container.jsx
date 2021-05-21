import React, { useState } from "react";
import axios from "axios";
import { City } from "./City";
import { Details } from "./Details";
import { Footer } from "./Footer";
import { Forecast } from "./Forecast";

export function Container(props) {

  const [cityInput, setCityInput] = useState(props.defaultCity);
  const [cityName, setCityName] = useState(props.defaultCity);
  const [ready, setReady] = useState(false);
  const [humidity, setHumidity] = useState(null);
  const [description, setDescription] = useState("");
  const [wind, setWind] = useState(null);
  const [icon, setIcon] = useState("");
  const [temperature, setTemperature] = useState(null);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=3a2f76834c807537970303e3dab30fe7&units=metric`;
  
  function showTemperature(response) {
    setTemperature(Math.round(response.data.main.temp));
    setHumidity(response.data.main.humidity);
    setDescription(response.data.weather[0].description);
    setWind(Math.round(response.data.wind.speed));
    setCityName(response.data.name);
    setIcon(`${response.data.weather[0].icon}.svg` );
    setReady(true);
  }
  
  function searchCity() {
    axios
      .get(url)
      .then(showTemperature)
      .catch((error) => {
       
        
        alert("City Not Found");
      });
  }

  function handSubmission(e) {
    e.preventDefault();
    searchCity();
    
  }
  function getValue(e) {
    setCityInput(e.target.value);
  }

function showCurrentLocationLiveData() {
    navigator.geolocation.getCurrentPosition(function(position) {
        let currentLatitude = position.coords.latitude;
        let currentLongitude = position.coords.longitude;
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${currentLatitude}&lon=${currentLongitude}&appid=3a2f76834c807537970303e3dab30fe7&units=metric`;
        axios.get(url).then(showTemperature).catch((error) => {
            alert("City Not Found");
        });
        // url = `https://api.openweathermap.org/data/2.5/forecast?lat=${currentLatitude}&lon=${currentLongitude}&appid=${apiKey}&units=metric`;
        // axios.get(url).then(dispalyForecast).catch((error) => {

        // });
    });
}


  if(ready){
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-6" id="main">
          <div className="row">
           <>
    
      <div className="col-8">
        <form onSubmit={handSubmission} className="mt-3">
          <div className="input-group mb-3">
            <input
              type="search"
              className="form-control"
              placeholder="Change Location"
              onChange={getValue}
            />
            <div className="input-group-append">
              <button type="submit" className="btn btn-primary">
                <i className="fas fa-search-location"></i>
              </button>
            </div>
          </div>
        </form>

      </div>
      <div className="col-4 mt-3 ">
        <button type="button" className="btn btn-primary" id="currentLocation" onClick={showCurrentLocationLiveData}>
          <i className="fas fa-street-view"></i>
        </button>
      </div>
    </>
            <div className="col-md-12">
              <div className="row">
                <City temperatureVal={temperature} cityN={cityName} description={description} icon={icon}/>
                <Details windSpeed={wind} HumidityVal={humidity} />
              </div>
            </div>
          </div>
          <Forecast />
          <Footer />
        </div>
      </div>
      {/*weather icon by https://www.amcharts.com/free-animated-svg-weather-icons/*/}
    </div>
    );
  }
  else {
    searchCity();
    return "loading..."
  }
}
