import { useState } from 'react';
import './App.css';
import axios from 'axios'

function App() {

  const KEY = '6741ff56ba47e073f6eea46b2d36f910';
  const[cityName, setCityName]=useState('');
 const[weather,setWeather]=useState([])

  const getWeather=()=>{
    axios(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${KEY}`)
    .then(({data})=>setWeather(data)).catch((error) =>alert("Вы не правильно велии город"))
    setCityName("")
  }
  
  return (
    <div className="App">
      <div className="container">
      <div className="input">
    <input value={cityName} onChange={(e)=>setCityName(e.target.value)} type="text" placeholder='Введите город' className='App__input' />
     <button onClick={getWeather}>узнать</button>
     </div>
{weather.length === 0 ? "здесь будет ваша погода" : 
<table className='table' border={1}>
 <thead>
  <tr>
    <th>Прогноз погоды</th>
  </tr>
 </thead>
 <tbody>
  <tr>
<td>Город</td>
<td>{weather.name}</td>
  </tr>
  <tr>
<td>Страна</td>
<td>{weather.sys.country}</td>
  </tr>
  <tr>
<td>Температура</td>
<td>{(weather.main.temp - 273.15).toFixed(1) }</td>

  </tr>
  <tr>
    <td>Небо</td>
    <td>
      <img src={` https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="" />
    </td>
  </tr>
 </tbody>
</table>

}


  
    </div>
     
  </div>
  

  );
}

export default App;
