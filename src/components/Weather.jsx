import './Weather.css';
import cloud from '../assets/cloud.png';
import wind from '../assets/wind.png';
import { useRef, useState } from 'react';
import defaultimg from '../assets/404.png';
import axios from 'axios';
import cloudVideo from '../assets/cloudvideo.mp4';

export const Weather = () => {

  const [name, setName] = useState('');
  const [data, setData] = useState({
    celcius: 10,
    name: "London",
    humidity: 10,
    country: "UK",
    image: defaultimg,
  });

  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  const handleClick = () => {
    if (name !== "") {
      const ApiURL = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=90d1624964432cb1830b2c3a769d3bec`;
      axios.get(ApiURL).then((res) => {
        let imgPath = "";
        let VideoPath = "";

        if(res.data.weather[0].main === "Clouds"){
          imgPath=cloud;
          VideoPath=cloudVideo;
        }
        if(res.data.weather[0].main === "Rain"){
          imgPath=cloud;
          VideoPath=cloudVideo;
        }
        if(res.data.weather[0].main === "Clear"){
          imgPath=cloud;
          VideoPath=cloudVideo;
        }
        if(res.data.weather[0].main === "Snow"){
          imgPath=cloud;
          VideoPath=cloudVideo;
        }
        if(res.data.weather[0].main === "Mist"){
          imgPath=cloud;
          VideoPath=cloudVideo;
        }
        if(res.data.weather[0].main === "Heze"){
          imgPath=cloud;
          VideoPath=cloudVideo;
        }
        if(res.data.weather[0].main === "Clouds"){
          imgPath=cloud;
          VideoPath=cloudVideo;
        }
        else{
          imgPath=defaultimg;
        }
        setData({
          celcius:res.data.main.temp,
          name:res.data.name,
          humidity:res.data.main.humidity,
          speed:res.data.wind.speed,
          country:res.data.sys.country,
          image:imgPath,
          Video:VideoPath,
        })
        console.log(res);
      })

    }
    fetch(``)

  }


  return (

    <>
      <div className="container">
        <div className="weather">
          <div className="weather__search">
            <input type="text" placeholder="Search..."  onChange={e => setName(e.target.value)} />
            <button onClick={handleClick}>Search</button>
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

      </div>
    </>
  )
}
