import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherApi } from "./Store/action/ActionWeather";
import SearchWeather from "./Components/SearchWeather";
import CurrentWeather from "./Components/CurrentWeather";
import ForecastDetails from "./Components/ForecastDetails";

const App = () => {
  const city = useSelector((state) => state.weatherReducer.city);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeatherApi(city));
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900 via-slate-900 to-black p-6 flex flex-col items-center gap-8">
      <div className="w-full flex flex-col items-center gap-6 mt-10">
        <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 text-center">
          SkyCast AI 🌤️
        </h1>
        <SearchWeather />
      </div>

      <div className="w-full flex flex-col items-center gap-10">
        <CurrentWeather />
        <ForecastDetails />
      </div>

      <footer className="mt-auto text-slate-500 text-sm py-6">
        Weather App Dashboard • 2026
      </footer>
    </div>
  );
};

export default App;
