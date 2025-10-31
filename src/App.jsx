import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ForecastCard from './components/ForecastCard';
import { weatherService } from './services/weatherService';

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Load default city on mount
  useEffect(() => {
    handleSearch('London');
  }, []);

  const handleSearch = async (city) => {
    setLoading(true);
    setError(null);
    
    try {
      const [weatherData, forecastData] = await Promise.all([
        weatherService.getCurrentWeather(city),
        weatherService.getForecast(city)
      ]);
      
      setWeather(weatherData);
      setForecast(forecastData);
    } catch (err) {
      setError(err.message || 'Failed to fetch weather data');
      setWeather(null);
      setForecast(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-800 mb-2">
            ? Weather Dashboard
          </h1>
          <p className="text-gray-600 text-lg">
            Get real-time weather information for any city
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center">
          <SearchBar onSearch={handleSearch} loading={loading} />
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500"></div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="max-w-md mx-auto mb-8">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg shadow">
              <p className="font-semibold">Error</p>
              <p>{error}</p>
            </div>
          </div>
        )}

        {/* Weather Content */}
        {!loading && !error && weather && (
          <div className="flex flex-col items-center">
            <WeatherCard weather={weather} />
            <ForecastCard forecast={forecast} />
          </div>
        )}

        {/* API Key Notice */}
        {!loading && !error && !weather && (
          <div className="max-w-2xl mx-auto mt-8">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 shadow">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                ?? API Key Required
              </h3>
              <p className="text-yellow-700 mb-3">
                To use this weather dashboard, you need to add your OpenWeatherMap API key.
              </p>
              <ol className="list-decimal list-inside space-y-2 text-yellow-700">
                <li>Get a free API key from <a href="https://openweathermap.org/api" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">OpenWeatherMap</a></li>
                <li>Open <code className="bg-yellow-100 px-2 py-1 rounded">src/services/weatherService.js</code></li>
                <li>Replace <code className="bg-yellow-100 px-2 py-1 rounded">YOUR_API_KEY_HERE</code> with your actual API key</li>
              </ol>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="text-center mt-12 text-gray-600">
          <p className="text-sm">
            Powered by <a href="https://openweathermap.org" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">OpenWeatherMap API</a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
