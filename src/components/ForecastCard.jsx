import React from 'react';
import { weatherService } from '../services/weatherService';

const ForecastCard = ({ forecast }) => {
  if (!forecast || !forecast.list) return null;

  // Get one forecast per day (every 8th item, as data is every 3 hours)
  const dailyForecasts = forecast.list.filter((_, index) => index % 8 === 0).slice(0, 5);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  return (
    <div className="w-full max-w-4xl">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">5-Day Forecast</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {dailyForecasts.map((day, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-shadow"
          >
            <p className="text-sm font-semibold text-gray-600 mb-2">
              {formatDate(day.dt)}
            </p>
            <img
              src={weatherService.getIconUrl(day.weather[0].icon)}
              alt={day.weather[0].description}
              className="w-16 h-16 mx-auto"
            />
            <p className="text-2xl font-bold text-center text-gray-800 mb-1">
              {Math.round(day.main.temp)}?C
            </p>
            <p className="text-xs text-center text-gray-600 capitalize">
              {day.weather[0].description}
            </p>
            <div className="mt-3 pt-3 border-t border-gray-200 text-xs text-gray-600">
              <div className="flex justify-between">
                <span>Min</span>
                <span className="font-semibold">{Math.round(day.main.temp_min)}?C</span>
              </div>
              <div className="flex justify-between mt-1">
                <span>Max</span>
                <span className="font-semibold">{Math.round(day.main.temp_max)}?C</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastCard;
