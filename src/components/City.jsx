import React from "react";
import { Temperature } from "./Temperature";
export function City() {
  return (
    <>
      <div className="col-md-12">
        <h3 id="displayCityName">Tucson</h3>
        <h4 id="description">Clear Sky</h4>
      </div>
      <div className="col-6 mt-3">
        <div className="clearfix weather-temperature">
          <img
            id="main_img"  className="img-fluid float-left"
            src="01d.svg"
            alt="clear"
          />
          <Temperature />
        </div>
      </div>
    </>
  );
}
