# Weather Dashboard ?

A beautiful and responsive weather dashboard built with React and Tailwind CSS. Get real-time weather information and 5-day forecasts for any city worldwide.

![Weather Dashboard](https://img.shields.io/badge/React-18.2.0-blue) ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4.0-38bdf8) ![Vite](https://img.shields.io/badge/Vite-5.0.8-646cff)

## Features

- ?? **City Search** - Search for weather in any city worldwide
- ??? **Current Weather** - View current temperature, conditions, humidity, wind speed, and pressure
- ?? **5-Day Forecast** - See weather predictions for the next 5 days
- ?? **Beautiful UI** - Modern, responsive design with Tailwind CSS
- ? **Fast Performance** - Built with Vite for lightning-fast development and builds
- ?? **Mobile Responsive** - Works seamlessly on all device sizes

## Screenshots

The dashboard features:
- A gradient blue background for a pleasant viewing experience
- Large, easy-to-read weather cards with glassmorphism effects
- Interactive search bar with loading states
- Forecast cards with detailed information including min/max temperatures
- Responsive grid layout that adapts to different screen sizes

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- OpenWeatherMap API key (free)

### Installation

1. **Clone the repository** (or you're already here!)

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Get your API key:**
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Generate your API key from the dashboard

4. **Configure the API key:**
   - Open `src/services/weatherService.js`
   - Replace `YOUR_API_KEY_HERE` with your actual API key:
   ```javascript
   const API_KEY = 'your_actual_api_key_here';
   ```

5. **Start the development server:**
   ```bash
   npm run dev
   ```

6. **Open your browser:**
   - Navigate to `http://localhost:5173`
   - The default city (London) will load automatically

## Usage

1. **Search for a city:**
   - Type any city name in the search bar
   - Press Enter or click the Search button
   - Weather data will load automatically

2. **View current weather:**
   - See temperature, weather description, and conditions
   - Check additional details like humidity, wind speed, and pressure

3. **Check the forecast:**
   - Scroll down to view the 5-day forecast
   - Each card shows the date, weather icon, temperature, and min/max values

## Project Structure

```
weather-dashboard/
??? src/
?   ??? components/
?   ?   ??? SearchBar.jsx      # Search input component
?   ?   ??? WeatherCard.jsx    # Current weather display
?   ?   ??? ForecastCard.jsx   # 5-day forecast display
?   ??? services/
?   ?   ??? weatherService.js  # API service for weather data
?   ??? App.jsx                # Main application component
?   ??? main.jsx               # React entry point
?   ??? index.css              # Tailwind CSS imports
??? index.html                 # HTML template
??? package.json               # Dependencies and scripts
??? tailwind.config.js         # Tailwind configuration
??? vite.config.js             # Vite configuration
??? README.md                  # This file
```

## Technologies Used

- **React 18** - UI library for building the interface
- **Tailwind CSS 3** - Utility-first CSS framework for styling
- **Vite** - Next-generation frontend build tool
- **OpenWeatherMap API** - Weather data provider

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## API Information

This app uses the [OpenWeatherMap API](https://openweathermap.org/api) which provides:
- Current weather data
- 5-day/3-hour forecast
- Weather icons and descriptions

The free tier includes:
- 60 calls per minute
- 1,000,000 calls per month
- Current weather and forecasts

## Customization

### Changing Default City

In `src/App.jsx`, modify the `useEffect` hook:
```javascript
useEffect(() => {
  handleSearch('YourCityName');
}, []);
```

### Changing Temperature Units

In `src/services/weatherService.js`, modify the `units` parameter:
- `metric` - Celsius (default)
- `imperial` - Fahrenheit
- `standard` - Kelvin

### Styling

All styles use Tailwind CSS utility classes. To customize:
- Modify `tailwind.config.js` for theme changes
- Edit component files to adjust layout and styling

## Troubleshooting

**"City not found" error:**
- Check the city name spelling
- Try including the country code (e.g., "London,UK")

**Weather data not loading:**
- Verify your API key is correct
- Check if you've exceeded API rate limits
- Ensure you have an internet connection

**Development server won't start:**
- Delete `node_modules` and run `npm install` again
- Check if port 5173 is already in use

## License

This project is open source and available for personal and educational use.

## Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org)
- Icons from OpenWeatherMap
- Built with React and Tailwind CSS

---

Enjoy your weather dashboard! ???
