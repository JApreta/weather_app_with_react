import React from "react";
import { City } from "./City";
import { Details } from "./Details";
import { Footer } from "./Footer";
import { Forecast } from "./Forecast";
import { Search } from "./Search";
export function Container() {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-6" id="main">
          <div className="row">
            <Search />
            <div className="col-md-12">
              <div className="row">
                <City />
                <Details />
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
