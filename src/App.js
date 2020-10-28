import React from 'react';

import './App.css';
import SearchBar from './components/searchBar/searchBar';
import Weather from './components/weather/weather';
import Footer from './components/footer/footer'
function App() {
  return (
    <div className="App">
  <h1>Weather</h1>
    <SearchBar/>
   <Weather/>
   <Footer/>
    </div>
  );
}

export default App;
