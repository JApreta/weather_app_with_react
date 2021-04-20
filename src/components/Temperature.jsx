import React from "react";
export function Temperature() {
  return (
    <div className="float-left">
      <strong id="temperature">23</strong>
      <span id="units">
        <a id="showTempInC" rel="noopener noreferrer" href="./" className="hide">
          °C
        </a>
        &nbsp;
        <span id="showTempInC_span">°C</span> |&nbsp;
        <a href="./" id="showTempInF">
          °F
        </a>
        &nbsp;
        <span id="showTempInF_span" className="hide">
          °F
        </span>
        &nbsp;
      </span>
    </div>
  );
}
