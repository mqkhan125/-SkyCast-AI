import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherApi, setCity } from "../Store/action/ActionWeather";

const SearchWeather = () => {
  const dispatch = useDispatch();
  const city = useSelector((state) => state.weatherReducer.city);

  const handleInput = (e) => {
    dispatch(setCity(e.target.value));
  };

  const handleSearchBtn = () => {
    dispatch(fetchWeatherApi(city));
  };

  return (
    <div className="flex gap-2 w-full max-w-md">
      <div className="relative flex-grow">
        <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
          🔍
        </span>
        <input
          type="search"
          className="input input-bordered w-full pl-10 text-2xl bg-white/10 backdrop-blur-sm border-white/20 focus:border-accent"
          placeholder="Search city (e.g. Lahore)..."
          onChange={handleInput}
          value={city}
        />
      </div>
      <button
        onClick={handleSearchBtn}
        className="btn btn-accent shadow-lg hover:scale-105 transition-transform"
      >
        Search 🚀
      </button>
    </div>
  );
};

export default SearchWeather;
