import React from 'react'
import {connect} from 'react-redux'
import classes from './weather.module.scss'
import WeatherDetails from './weatherDetails/weatherDetails';
const Weather = ({weatherData,errorMsg}) => {
console.log("weatherdata",weatherData);
console.log("error",errorMsg);
if(weatherData.name){
return (
<div className={ classes.weather}>
    <img className={classes.weather__background} src={require(`../../static/img/${weatherData.weather[0].icon}.png`)}
        alt="background" />
    <div className={classes.weather__weatherDetails}>
        <WeatherDetails weatherData={weatherData} />
    </div>
</div>
)}else if (errorMsg) {
    return <h3 className={classes.weather__error}>City not found</h3>
}
else{
return <h3>Please enter city name</h3>
}
}
const mapStateToProps=(state)=>{
return{
weatherData:state.weather,
errorMsg:state.error
}
}
export default connect(mapStateToProps)(Weather)