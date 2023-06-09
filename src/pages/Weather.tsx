import React, { useState } from "react";
import { weatherDetailsType } from "../utils/types";

//weather app
const Weather = () => {
  const [weatherDetails, setWeatherDetails] = useState<weatherDetailsType>();
  const [cityName, setCityName] = useState<string>("");
  const [units, setUnits] = useState<string>("");
  const getWeatherHandler = () => {
    if (!cityName) {
      return alert("لطفا نام شهر خود را وارد نمایید!");
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${units}&APPID=119da8c7c7c7b3886334214b4ddf4410`;

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
    <div id="main-container">
      <div>
        <input
          name="cityName"
          type="text"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
      </div>
      <div>
        <input
          id="metric"
          name="unit"
          type="radio"
          value={"metric"}
          onChange={(e) => setUnits(e.target.value)}
        />{" "}
        <label htmlFor="metric">C</label>
        <br></br>
        <input
          id="imperial"
          name="unit"
          type="radio"
          value={"imperial"}
          onChange={(e) => setUnits(e.target.value)}
        />{" "}
        <label htmlFor="imperial">F</label>
      </div>
      <button onClick={getWeatherHandler}>دریافت آب و هوا</button>
      <p className="center">
        {weatherDetails ? "" : "برای مشاهده اطلاعات نام شهر را وارد نمایید"}
      </p>
      {weatherDetails && (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>آب و هوای امروز شهر {cityName}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="center">
                  دمای هوا:{" "}
                  {weatherDetails && <p> {weatherDetails.main.temp}</p>}
                </td>
                <td className="center">
                  دمای احساسی:{" "}
                  {weatherDetails && <p> {weatherDetails.main.feels_like}</p>}
                </td>
              </tr>
              <tr>
                <td className="center">
                  حداقل دما:{" "}
                  {weatherDetails && <p> {weatherDetails.main.temp_min}</p>}
                </td>
                <td className="center">
                  حداکثر دما:{" "}
                  {weatherDetails && <p> {weatherDetails.main.temp_max}</p>}
                </td>
              </tr>
              <tr>
                <td className="center">
                  فشار هوا:{" "}
                  {weatherDetails && <p> {weatherDetails.main.pressure}</p>}
                </td>
                <td className="center">
                  رطوبت نسبی:{" "}
                  {weatherDetails && <p> {weatherDetails.main.humidity}</p>}
                </td>
              </tr>
              <tr>
                <td className="center">
                  طول جغرافیایی:{" "}
                  {weatherDetails && <p> {weatherDetails.coord.lon}</p>}
                </td>
                <td className="center">
                  عرض جغرافیایی:{" "}
                  {weatherDetails && <p> {weatherDetails.coord.lat}</p>}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
export default Weather;
