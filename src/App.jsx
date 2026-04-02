import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchWeatherApi } from './Store/action/ActionWeather'
import SearchWeather from './Components/SearchWeather'

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
     dispatch(fetchWeatherApi('Noida'))
  },[])

  return (
    <div className='p-10 flex justify-center items-center'>
    <SearchWeather />
    </div>
  )
}

export default App