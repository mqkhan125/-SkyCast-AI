import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchWeatherApi } from './Store/action/ActionWeather'

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
     dispatch(fetchWeatherApi('Noida'))
  },[])

  return (
    <div>App</div>
  )
}

export default App