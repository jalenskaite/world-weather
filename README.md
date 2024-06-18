# World Weather

This project implements an interactive map using Mapbox GL JS. It allows users to click on the map to retrieve and display weather data at the selected location using the OpenWeatherQueue API. You can view a live demo of the project [here](https://worldweather.catchtryfinally.com).

## Features
- Interactive mapping with Mapbox GL JS.
- Weather data retrieval from OpenWeatherMap API.
- Dynamic popup for displaying weather information.
- Temperature units switcher allowing the user to toggle between Celsius and Fahrenheit.

## Running the Application Locally
Before you begin, ensure you have met the following requirements:
- Node.js (v20.11.0 or later recommended)
- Copy the `.env.example` file and rename it to `.env`. Descriptions for the environment variables can be found in the [Environment Variables](#environment-variables) section.
- Run `npm install` to install dependencies.
- For development, run `npm run dev` and follow the instructions from the command line.

## Testing
- The application does not have unit, integration, or E2E tests at the moment.
- The application was tested only on the latest version of Google Chrome.

## Environment Variables
Ensure these variables are set in your `.env` file according to your environment:

| Variable                   | Description                                                    | Example Value                                 |
|----------------------------|----------------------------------------------------------------|-----------------------------------------------|
| `VITE_MAPBOX_ACCESS_TOKEN` | The access token for using Mapbox APIs.                        | `pk.eyJ1IjoieW91ci11c2VybmFtZSIsImEiOiJja2...` |
| `Vite_WEATHER_API_URL`     | The base URL for the OpenWeatherMap API.                       | `https://api.openweathermap.org/data/2.5`      |
| `VITE_WEATHER_API_KEY`     | Your API key for accessing OpenWeatherMap data.                | `abcdef1234567890ghijklmn`                    |
| `VITE_WEATHER_ASSETS_URL`  | The base URL for accessing weather-related assets like icons.  | `https://openweathermap.org/img/wn`            |

## Third-Party Libraries 
Below is a list of third-party libraries utilized in this project and their purpose:

| Package                    | Description                                                                                      |
|----------------------------|--------------------------------------------------------------------------------------------------|
| `@mapbox/search-js-react`  | React components for adding Mapbox Search functionality to the application.                      |
| `axios`                    | Promise-based HTTP client used for making API requests to interact with external APIs.           |
| `mapbox-gl`                | JavaScript library that uses WebGL to render interactive maps from vector tiles and Mapbox styles. |
| `react`                    | JavaScript library for building user interfaces, serving as the core framework of the project.  |
| `react-dom`                | React package for DOM-specific methods that can be used at the top level of a web app to enable an efficient way of managing DOM elements. |
| `styled-components`        | CSS-in-JS library used for styling applications, enhancing component-scoped styles in React.     |
| `zustand`                  | Simple, yet powerful state management solution for React that is used to manage the application's global state. |

