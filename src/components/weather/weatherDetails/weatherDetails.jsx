import React from 'react'
import classes from './weatherDetails.module.scss';
const WeatherDetails = ({weatherData}) => {
return (
<div className={classes.weatherDetails}>
    <img className={classes.weatherDetails__image}
        src={require(`../../../static/img/icons/${weatherData.weather[0].icon}.svg`)} alt="aaa" />
    <h3 className={classes.weatherDetails__city}>{weatherData.name}, {weatherData.sys.country}</h3>
    <p className={classes.weatherDetails__description}>{weatherData.weather[0].description}</p>

    <h1 className={classes.weatherDetails__temp}><span>{Math.floor(weatherData.main.temp)}</span>&deg;C</h1>
    <ul className={classes.weatherDetails__tempList}>
        <li className={classes.weatherDetails__maxTemp}>
            <i className="fas fa-thermometer-three-quarters"></i>
            <div>
                <small>Max.</small>
                <p> {Math.floor(weatherData.main.temp_max)}&deg;C</p>
            </div>
        </li>
        <li className={classes.weatherDetails__minTemp}>
            <i className="fas fa-thermometer-quarter"></i>
            <div>
                <small>Min.</small>
                <p> {Math.floor(weatherData.main.temp_min)}&deg;C</p>
            </div>
        </li>
        <li className={classes.weatherDetails__pressure}>
            <i className="fas fa-lungs"></i>
            <div>
                <small>Pressure</small>
                <p> {Math.floor(weatherData.main.pressure)} hp</p>
            </div>
        </li>
        <li className={classes.weatherDetails__wind}>
            <i className="fas fa-wind"></i>
            <div>
                <small>Wind speed</small>
                <p> {Math.floor(weatherData.wind.speed)} kn</p>
            </div>

        </li>
    </ul>

</div>
)
}
export default WeatherDetails