import React from 'react'
import { useSelector } from 'react-redux';
import Loader from './Loader';

const CurrentWeather = () => {

const {current, loading} = useSelector((state) => state.weatherReducer)

if(loading) return <Loader />

  return (
    <div className="card bg-neutral text-neutral-content w-96">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{current?.name}</h2>
        <p>Temperature: {Math.round(current?.main?.temp - 273.15)}°C</p>
        <p>Humidity: {current?.main?.humidity}%</p>
        <p>Description: {current?.weather?.[0]?.description}</p>
        
      </div>
    </div>
  );
}

export default CurrentWeather