import React from "react";
import { useSelector } from "react-redux";

const ForecastDetails = () => {
  const { forecast, loading } = useSelector((state) => state.weatherReducer);

  if (loading || !forecast) return null;

  // Logic for filtering 5 days only (taking mid-day data)
  const dailyData = forecast.filter((reading) =>
    reading.dt_txt.includes("12:00:00"),
  );

  return (
    <div className="w-full max-w-4xl mt-6 px-4">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
        📅 5-Day Forecast
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {dailyData.map((item, index) => (
          <div
            key={index}
            className="bg-neutral/40 backdrop-blur-md p-4 rounded-3xl border border-white/5 text-center hover:bg-neutral/60 transition-all"
          >
            <p className="text-blue-300 font-bold text-xs uppercase mb-2">
              {new Date(item.dt_txt).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </p>
            <p className="text-3xl my-2">🌤️</p>
            <p className="text-2xl font-black text-white">
              {Math.round(item?.main?.temp - 273.15)}°
            </p>
            <p className="text-[10px] opacity-60 mt-2 text-white">
              💧 {item?.main?.humidity}% Hum.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastDetails;
