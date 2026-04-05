import React from 'react'
import { useSelector } from 'react-redux'
import Loader from './Loader'

const ForecastDetails = () => {

    const {forecast, loading, error} = useSelector((state) => state.weatherReducer)

    if(loading) return <Loader/>
    if(error) return <p className="text-error">Error: {error}</p>
    if(!forecast || forecast.length === 0) return <p className="text-info">No forecast data available.</p>

  return (
    <div className="card bg-neutral text-neutral-content w-96">
      <div className="card-body items-center text-center">
        <h2 className="card-title">5-Day Forecast</h2>
        {forecast.map((item, index) => (
          <div key={index}>
            <p>
              {item?.dt_txt} - {Math.round(item?.main?.temp - 273.15)}°C
            </p>
            <p>Humidity: {item?.main?.humidity}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ForecastDetails