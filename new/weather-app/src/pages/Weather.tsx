import React, { useState } from "react";
import { weatherDetailsType } from "../utils/types";
import { Navidbutton } from "../common";
import { NavidTable } from "../common/Table/NavidTable";
const Weather = () => {
  const [weatherDetails, setWeatherDetails] = useState<weatherDetailsType>();
  const [cityName, setCityName] = useState<string>("");
  const getWeatherHandler = () => {
    if (!cityName) {
      return alert("لطفا نام شهر خود را وارد نمایید!");
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=119da8c7c7c7b3886334214b4ddf4410`;

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        if (response.cod !== "404") {
          setWeatherDetails(response);
        } else {
          alert("شهر مورد نظر پیدا نشد!");
        }
      });
  };
  return (
    // main html
    <div className="App">
      <div>
        <input
          name="cityName"
          type="text"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
      </div>
      <NavidTable className="mytable" />
      <Navidbutton title={cityName} type="susc" onClick={getWeatherHandler} />
      {/* <button onClick={getWeatherHandler}>get weather</button> */}
      <p>{weatherDetails ? weatherDetails.coord.lat : "nayamade"}</p>
      {weatherDetails && <p> {weatherDetails.coord.lon}</p>}
      {weatherDetails && (
        <table>
          <tr>
            <td>نام شهر: {cityName}</td>
          </tr>
          <tr>
            <td>دمای هوا: {weatherDetails.main.temp}</td>
          </tr>
          <tr>
            <td></td>
          </tr>
        </table>
      )}
      {weatherDetails && <p> {weatherDetails.coord.lon}</p>}
    </div>
  );
};
export default Weather;
