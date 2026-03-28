import { FETCH_CURRENT_SUCCESS, FETCH_FORECAST_SUCCESS, FETCH_WEATHER_ERROR, FETCH_WEATHER_PENDING, SET_CITY } from "./constants/constants"

const initialstate = {
    city : 'Delhi',
    current : null,
    forecast : null,
    loading : null,
    error : null,

}

export const weatherReducer = (state = initialstate, action) => {
  switch (action.type) {
    case FETCH_WEATHER_PENDING:
      return { ...state, loading: true, error: null };

    case FETCH_CURRENT_SUCCESS:
      return { ...state, loading: false, current: action.payload };

    case FETCH_FORECAST_SUCCESS:
      return { ...state, loading: false, forecast: action.payload };

    case FETCH_WEATHER_ERROR:
      return { ...state, loading: false, error: action.payload };

    case SET_CITY:
      return { ...state, city: action.payload };

    default:
      return state;
  }
}; 