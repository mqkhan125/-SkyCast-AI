import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeatherApi } from './Store/action/ActionWeather'
import SearchWeather from './Components/SearchWeather'
import CurrentWeather from './Components/CurrentWeather'
import ForecastDetails from './Components/ForecastDetails'

const App = () => {

  const city = useSelector((state) => state.weatherReducer.city)
  const dispatch = useDispatch()

  useEffect(() => {
     dispatch(fetchWeatherApi(city))
  },[])

  return (
    <div className="p-10 flex flex-col items-center gap-12">
      <div className='sticky top-0 z-10 w-full flex flex-col gap-4 bg-base-100 p-4 max-w-sm rounded-lg shadow-sm'>
        <h1 className='text-3xl text-center'>Weather Dashboard</h1>
        <SearchWeather />
      </div>
      <CurrentWeather />
      <ForecastDetails />
    </div>
  );
}

export default App