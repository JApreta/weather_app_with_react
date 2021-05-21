import React,{ useState }  from "react";

export function Temperature(props) {
  const [temperature, setTemperature] = useState(props.val);
  const [isActive, setActive] = useState(false);
function convertToFarenheit(e) {
    e.preventDefault();
  setTemperature(Math.round((props.val * 9) / 5 + 32));
 setActive(!isActive);
    
  }

  function convertToCelcius(e) {
    e.preventDefault();
    setTemperature(props.val);
   setActive(!isActive);
    
  }

  return (
    <div className="float-end">
      <strong id="temperature">{ temperature}</strong>
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
  );
}
