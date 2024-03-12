import React,{useState} from 'react';
function Display(props){
    const [weather,setweather]=useState({
        temp:"",
        location:"",
        Wind:"",
        icon:"",
        Humidity:"",
    });
    const fetchWeatherData = async () => {
        try {
            const apikey="64fb0a4d26eec0b37b3189df8ed1ef47";
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=Metric&appid=${apikey}`;
            const response = await fetch(url);
            const data = await response.json();
            setweather({
                temp:data.main.temp,
                location:data.name,
                Wind:data.wind.speed,
                icon:data.weather[0].icon,
                Humidity:data.main.humidity,
            });
            console.log(data);
            // setemp(data.main.temp);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    fetchWeatherData();
    const urlicon=weather.icon?`https://openweathermap.org/img/wn/${weather.icon}@2x.png`:null;
    return urlicon && (
        
        <div>
           <div className='weather-icon'>
               {/* <img src='https://imgs.search.brave.com/tbHu-NJacvo3j6wVewWbzoHJ2mCnq5Q_qMykeiVqo8Q/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS81/MTIvMjUyLzI1MjAz/NS5wbmc'/> */}
               <img src={urlicon} alt='weather-icon'/>
           </div>
           <div className='temp'>
               <h1>{weather.temp}°C</h1>
           </div>
           <div className='location'>
             <p>{weather.location}</p>
           </div>
           <div className='weather-element'>
                <div className='element'>
                    <img  className="icon" src='https://imgs.search.brave.com/qMcBBU5Lii1VgugmT8YzSd043h8XJ45cNBatXxaQKtw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudGhlbm91bnBy/b2plY3QuY29tL3Bu/Zy85ODU1NDgtMjAw/LnBuZw'/>
                    <div className='data'>
                        <div className='humidity-percentage'>{weather.Humidity}%</div>
                        <div className='text'>Humidity Percentage</div>
                    </div>
                </div>
                <div className='element'>
                    <img className='icon' src='https://imgs.search.brave.com/Qxxc6MiXbGQhVLrFCH7CkB0OqZP9nSUUJ2niqof44Xs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudGhlbm91bnBy/b2plY3QuY29tL3Bu/Zy8xMTI5NTcxLTIw/MC5wbmc'/>
                <div className='data'>
                        <div className='wind-speed'>{weather.Wind}m/s</div>
                        <div className='text'>Wind Speed(m/s)</div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default Display;