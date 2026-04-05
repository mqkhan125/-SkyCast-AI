import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeatherApi } from './Store/action/ActionWeather'
import SearchWeather from './Components/SearchWeather'
import CurrentWeather from './Components/CurrentWeather'

const App = () => {

  const city = useSelector((state) => state.weatherReducer.city)
  const dispatch = useDispatch()

  useEffect(() => {
     dispatch(fetchWeatherApi(city))
  },[])

  return (
    <div className='p-10 flex flex-col items-center gap-12'>
    <SearchWeather />
    <CurrentWeather />
    </div>
  )
}

export default App