import React from 'react';
import { weatherService } from '../services/weatherService';

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  const { name, sys, main, weather: weatherInfo, wind } = weather;
  const weatherIcon = weatherInfo[0];

  return (
    <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-2xl p-8 text-white w-full max-w-md mb-8">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-3xl font-bold mb-1">{name}</h2>
          <p className="text-blue-100 text-sm">{sys.country}</p>
        </div>
        <img
          src={weatherService.getIconUrl(weatherIcon.icon)}
          alt={weatherIcon.description}
          className="w-20 h-20"
        />
      </div>

      <div className="mb-6">
        <div className="text-6xl font-bold mb-2">
          {Math.round(main.temp)}?C
        </div>
        <p className="text-xl capitalize text-blue-100">{weatherIcon.description}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 pt-6 border-t border-blue-400">
        <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
          <p className="text-blue-200 text-sm mb-1">Feels Like</p>
          <p className="text-2xl font-semibold">{Math.round(main.feels_like)}?C</p>
        </div>
        <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
          <p className="text-blue-200 text-sm mb-1">Humidity</p>
          <p className="text-2xl font-semibold">{main.humidity}%</p>
        </div>
        <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
          <p className="text-blue-200 text-sm mb-1">Wind Speed</p>
          <p className="text-2xl font-semibold">{wind.speed} m/s</p>
        </div>
        <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
          <p className="text-blue-200 text-sm mb-1">Pressure</p>
          <p className="text-2xl font-semibold">{main.pressure} hPa</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
