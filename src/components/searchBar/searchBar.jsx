import React, { useState } from 'react'
import {connect} from 'react-redux'
import {fetchWeatherData} from '../../redux/actions/fetchWeatherAction'
import classes from './searchBar.module.scss'
const SearchBar = ({fetchWeather}) => {
 
const [city, setCity] = useState("");
const handleSubmit=(e)=>{
    e.preventDefault();
    fetchWeather(city)
    setCity("")
}
const handleChange=(e)=>{
setCity(e.target.value)

}
    return (
        <div className={classes.searchBar}>
           <form onSubmit={(e)=>{handleSubmit(e)}}>
               <div>
                   <input type="text" onChange={(e)=>{handleChange(e)}} value={city} placeholder="Search..."/>
               </div>
           </form>
        </div>
    )
}
const mapDispatchToProps=(dispatch)=>{
    return {
        fetchWeather:(city)=>{dispatch(fetchWeatherData(city))}
    }
}
export default connect(null,mapDispatchToProps)(SearchBar)
