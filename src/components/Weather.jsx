import './Weather.css';
import winfoimg from '../assets/Sun_PNG_Image_Clipart.png';
import wind from '../assets/wind.png';
import { useState } from 'react';

export const Weather = () => {

  const [name, setName] = useState('');
  const [data, setData] = useState({
    calcius: 10,
    bane: 'London',
    humidity: 10,
    country: 'UK',

  });



  return (

    <>
      <div className="container">
        <div className="weather">
          <div className="weather__search">
            <input type="text" placeholder="Search..." className="weather__search-bar" />
            <button>Search</button>
          </div>
          <div className="weather__info">
            <img src={winfoimg} alt="" className='icon' />
            <h1>25 &deg;C</h1>
            <h2>London <span>UK</span></h2>
            <div className='details'>
              <div className='col'>
                <img src={wind} alt=""  />
                <div className='humidity'>
                  <p>55%</p>
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
