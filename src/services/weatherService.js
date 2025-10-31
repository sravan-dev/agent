// Weather API service using OpenWeatherMap API
// Get your free API key from: https://openweathermap.org/api

const API_KEY = 'YOUR_API_KEY_HERE'; // Replace with your OpenWeatherMap API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const weatherService = {
  // Get current weather by city name
  async getCurrentWeather(city) {
    try {
      const response = await fetch(
        `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      
      if (!response.ok) {
        throw new Error('City not found');
      }
      
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  // Get 5-day forecast
  async getForecast(city) {
    try {
      const response = await fetch(
        `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      
      if (!response.ok) {
        throw new Error('City not found');
      }
      
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  // Get weather icon URL
  getIconUrl(iconCode) {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  }
};
