import './Weather.css';
import cloud from '../assets/cloud.png';
import wind from '../assets/wind.png';
import clear from '../assets/clear.png';
import clearVideo from '../assets/clearvideo.mp4';
import rain from '../assets/rain.png';
import rainVideo from '../assets/rainvideo.mp4';
import snow from '../assets/snow.png';
import snowVideo from '../assets/snowvideo.mp4';
import mist from '../assets/mist.png';
import mistVideo from '../assets/mistvideo.mp4';
import { useRef, useState } from 'react';
import defaultimg from '../assets/404.png';

import cloudVideo from '../assets/cloudvideo.mp4';

export const Weather = () => {
  const [error, setError] = useState(false);
  const [name, setName] = useState('');
  const [data, setData] = useState({
    celcius: 0,
    name: "-",
    humidity: 0,
    country: "",
    image: defaultimg,
    speed: 0,
  });

  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  const handleClick = () => {
    if (name !== "") {
      const ApiURL = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=90d1624964432cb1830b2c3a769d3bec`;

      fetch(ApiURL)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
          }
          return response.json();
        })
        .then((res) => {
          let imgPath = "";
          let VideoPath = "";

          if (res.weather[0].main === "Clouds") {
            imgPath = cloud;
            VideoPath = cloudVideo;
          } else if (res.weather[0].main === "Rain" || res.weather[0].main === "Drizzle") {
            imgPath = rain;
            VideoPath = rainVideo;
          } else if (res.weather[0].main === "Clear") {
            imgPath = clear;
            VideoPath = clearVideo;
          } else if (res.weather[0].main === "Snow") {
            imgPath = snow;
            VideoPath = snowVideo;
          } else if (res.weather[0].main === "Mist") {
            imgPath = mist;
            VideoPath = mistVideo;
          }

          setData({
            celcius: res.main.temp,
            name: res.name,
            humidity: res.main.humidity,
            speed: res.wind.speed,
            country: res.sys.country,
            image: imgPath,
            Video: VideoPath,
          });

          setShowVideo(false);
          setTimeout(() => setShowVideo(true), 100);
          setError(false);
          console.log(res);
        })
        .catch((error) => {
          console.error('There has been a problem with your fetch operation:', error);
          setError(error.message);
          setShowVideo(false);
        });
    }
  };



  return (

    <>
      <div className="container">
        <div className="weather">
          <div className="weather__search">
            <input type="text" placeholder="Search..."  onChange={e => setName(e.target.value)} />
            <button onClick={handleClick}>Search</button>
          </div>
          <div className="error">
            <p>{error}</p>
          </div>
          <div className="weather__info">
            <img src={data.image}alt="" className='icon' />
            <h1>{Math.round(data.celcius)} &deg;C</h1>
            <h2>{data.name} <span>{data.country}</span></h2>
            <div className='details'>
              <div className='col'>
                <img src={wind} alt=""  />
                <div className='humidity'>
                  <p>{Math.round(data.humidity)}%</p>
                  <p>Humidity</p>
                </div>
              </div>
              <div className='col'>
                <img src={wind} alt=""  />
                <div className='wind'>
                  <p>{Math.round(data.speed)} km/H</p>
                  <p>Wind</p>
                </div>
              </div>
            </div>
          </div>
        </div>
          {
            showVideo &&
            <video autoPlay loop muted ref={videoRef} className='video-bg'>
              <source src={data.Video} type='video/mp4' />
            </video>
          }
      </div>
    </>
  )
}
