import { useEffect, useState } from "react";
const KEY = "e0cf511976cce41c4238f5537f5a7e54";

export default function Weather() {
  const [searchedCity, setSearchedCity] = useState();
  const [city, setCity] = useState();
  const [temperature, setTemperature] = useState(null);
  const [data, setData] = useState();
  const [weatherImg, setWeatherImg] = useState();
  useEffect(() => {
    if (data?.main) {
      setTemperature(data.main.temp);
      setWeatherImg(
        `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      );
    }
  }, [data]);

  useEffect(() => {
    async function fetchData() {
      try {
        if (city === undefined) return;
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${KEY}`
        );
        const data = await res.json();
        setData(data);
        console.log(data);
        if (data.cod !== "200") throw new Error(data.message);
      } catch (err) {
        console.log(err.message);
      }
    }

    fetchData();
  }, [city]);

  function handleSearchCity(e) {
    e.preventDefault();
    setCity(searchedCity);
  }

  return (
    <div className="weather-container">
      <div className="title">Weather App</div>
      <form onSubmit={handleSearchCity}>
        <input
          type="text"
          className="weather-input"
          placeholder="Enter a City..."
          onChange={(e) => setSearchedCity(e.target.value)}
        />
      </form>
      {data && (
        <div className="weather-output">
          <div className="weather-img">
            <img src={weatherImg} alt="weather" />
          </div>
          <div>
            <div>Today</div>
            <div>
              {data.name}, {data.sys.country}
            </div>
            <div>Temperature: {temperature}^C</div>
            <div>Wind speed: {data.wind.speed}</div>
            <div>Humidity: {data.main.humidity}</div>
          </div>
        </div>
      )}
    </div>
  );
}
