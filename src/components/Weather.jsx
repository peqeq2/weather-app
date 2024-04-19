import './Weather.css';

import wind from '../assets/wind.png';
import { useState } from 'react';
import defaultimg from '../assets/404.png';
import { Axios } from 'axios';

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
      Axios.get(ApiURL).then(() => {
        let imgPath = "";
        let VideoPath = "";

        if(res.data.eeather[0].main === "Clouds"){

        }
      })

    }
    fetch(``)

  }


  return (

    <>
      <div className="container">
        <div className="weather">
          <div className="weather__search">
            <input type="text" placeholder="Search..." className="weather__search-bar" />
            <button>Search</button>
          </div>
          <div className="weather__info">
            <img src={data.image}alt="" className='icon' />
            <h1>{data.celcius} &deg;C</h1>
            <h2>{data.name} <span>{data.country}</span></h2>
            <div className='details'>
              <div className='col'>
                <img src={wind} alt=""  />
                <div className='humidity'>
                  <p>{data.humidity}%</p>
                  <p>Humidity</p>
                </div>
              </div>
              <div className='col'>
                <img src={wind} alt=""  />
                <div className='wind'>
                  <p>55 km/H</p>
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
