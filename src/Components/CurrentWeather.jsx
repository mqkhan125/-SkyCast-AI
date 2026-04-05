import React from "react";
import { useSelector } from "react-redux";
import Loader from "./Loader";

const CurrentWeather = () => {
  const { current, loading, error } = useSelector(
    (state) => state.weatherReducer,
  );

  if (loading) return <Loader />;
  if (error)
    return (
      <div className="alert alert-error mb-4">
        <span>⚠️ Error: {error}</span>
      </div>
    );
  if (!current)
    return <p className="text-info">Search a city to see weather! 🌍</p>;

  return (
    <div className="card w-full max-w-md bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-2xl overflow-hidden border border-white/20">
      <div className="card-body items-center text-center p-8">
        <h2 className="text-sm uppercase tracking-widest opacity-80 mb-1">
          Current Weather
        </h2>
        <h3 className="card-title text-4xl font-black mb-4">
          📍 {current?.name}
        </h3>

        <div className="flex flex-col items-center gap-2">
          <span className="text-8xl font-bold drop-shadow-lg">
            {Math.round(current?.main?.temp - 273.15)}°C
          </span>
          <p className="text-xl capitalize font-medium italic">
            ☁️ {current?.weather?.[0]?.description}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 w-full mt-8 pt-6 border-t border-white/20">
          <div className="flex flex-col">
            <span className="text-xs opacity-70">Humidity</span>
            <span className="text-xl font-bold">
              💧 {current?.main?.humidity}%
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs opacity-70">Condition</span>
            <span className="text-xl font-bold">
              🌡️ Feel: {Math.round(current?.main?.feels_like - 273.15)}°
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
