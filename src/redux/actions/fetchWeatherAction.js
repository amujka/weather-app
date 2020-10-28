import axios from 'axios'
import {
    FETCH_WEATHER_FAIL,
    FETCH_WEATHER_REQUEST,
    FETCH_WEATHER_SUCCESS
} from './actionTypes'
const fetchWeatherRequest = () => {
    return {
        type: FETCH_WEATHER_REQUEST
    }
}
const fetchWeatherSuccess = (weather) => {
    return {
        type: FETCH_WEATHER_SUCCESS,
        payload: weather
    }
}
const fetchWeatherFail = (error) => {
    return {
        type: FETCH_WEATHER_FAIL,
        payload: error
    }
}
export const fetchWeatherData = (city) => {
    let cityName=city.trim()
    const apikey = 'c2be991140cbe5f3a48a4d506cdb4a8d#';
    const baseUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apikey}`
    return (dispatch)=>{
        dispatch(fetchWeatherRequest)
        axios.get(baseUrl).then((response)=>{
            //console.log(response.data);
            let weather=response.data
            dispatch(fetchWeatherSuccess(weather))
        }).catch((error)=>{
           // console.log(error);
            let errorMsg=error.message
            dispatch(fetchWeatherFail(errorMsg))
        })
    }
}