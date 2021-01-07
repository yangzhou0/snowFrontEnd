import React,{useState, useEffect} from 'react'
import axios from 'axios'
import './css/weatherComponent.css'

export default function Weather({latitude,longitude}) {
  const [weatherData, setWeatherData] = useState(null);

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`
  }

  useEffect(()=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${latitude}&lon=${longitude}&appid=3115dd5f897c855de48b2d210f218903`).then(response => setWeatherData(response.data))
  },[latitude,longitude])
  const isNightTime = ()=>{
    return weatherData ? (weatherData.dt > weatherData.sys.sunset || weatherData.dt < weatherData.sys.sunrise) : true
  }

  return (
    <div className={isNightTime()? 'nightWeather' : 'dayWeather'}>
      {weatherData &&  
        <div>
        <div className="location-box">
          <div className="location">{weatherData.name}</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">
            {weatherData.main.temp} °F
          </div>
          <div className="weather"> {weatherData.weather[0].main}</div>
        </div>
      </div>
      }
    </div>
  )
}
