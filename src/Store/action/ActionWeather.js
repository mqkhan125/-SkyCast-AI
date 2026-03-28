import axios from "axios"
import { FETCH_CURRENT_SUCCESS, FETCH_FORECAST_SUCCESS, FETCH_WEATHER_ERROR, FETCH_WEATHER_PENDING, SET_CITY } from "../reducer/constants/constants"


 const API_KEY = import.meta.env.VITE_WEATHER_API;

export const fetchWeatherPending = () => {
   return {
    type: FETCH_WEATHER_PENDING,
    
   }
}

export const fetchCurrentSuccess = (data) => {
   return {
    type: FETCH_CURRENT_SUCCESS,
    payload: data

   }
}

export const fetchForecastSuccess = (data) => {
   return {
    type: FETCH_FORECAST_SUCCESS,
    payload: data
   }
}

export const fetchWeatherError = (error) => {
   return {
    type: FETCH_WEATHER_ERROR,
    payload: error
   }
}

export const setCity = (city) => {
   return {
    type: SET_CITY,
     payload: city
   }
}

export const fetchWeatherApi = (city) => {
  return async(dispatch) => {
    const currentWetherDetails = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
    );
    console.log(currentWetherDetails);
  }

}