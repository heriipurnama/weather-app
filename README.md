# Weather App

This is a simple weather application built using Angular. The application allows users to add cities, view the current weather conditions of the cities, and see detailed weather information for each city. The application uses the OpenWeatherMap API to fetch weather data.

## Features

- Add new cities and save them locally.
- Display a list of cities with their current weather conditions.
- View detailed weather information for each city.
- Show a loading indicator while fetching data.
- Display error messages if the weather data cannot be fetched.
- Navigation back to the main page from the detail page.

## Prerequisites

- Node.js and npm installed on your machine.
- An API key from [OpenWeatherMap](https://openweathermap.org/).

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/heriipurnama/weather-app.git
   cd weather-app
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Open `src/app/weather.service.ts` and replace `YOUR_API_KEY` with your OpenWeatherMap API key:

   ```typescript
   private apiKey = 'YOUR_API_KEY';
   ```

## Running the Application

1. Start the Angular development server:

   ```bash
   ng serve
   ```

2. Open your browser and navigate to `http://localhost:4200`.

## File Structure

```
weather-app/
├── src/
│   ├── app/
│   │   ├── city-detail/
│   │   │   ├── city-detail.component.css
│   │   │   ├── city-detail.component.html
│   │   │   ├── city-detail.component.ts
│   │   ├── city-list/
│   │   │   ├── city-list.component.css
│   │   │   ├── city-list.component.html
│   │   │   ├── city-list.component.ts
│   │   ├── weather.service.ts
│   │   ├── app-routing.module.ts
│   │   ├── app.component.html
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   ├── index.html
│   ├── main.ts
```

## Components

### AppComponent

The root component that contains the router outlet for navigation.

### CityListComponent

- Displays a list of cities with their current weather conditions.
- Allows users to add new cities.
- Shows a loading indicator while fetching data.
- Displays error messages if data cannot be fetched.

### CityDetailComponent

- Displays detailed weather information for a selected city.
- Shows a loading indicator while fetching data.
- Displays error messages if data cannot be fetched.
- Includes a "Back" button to return to the main page.

## Services

### WeatherService

- Fetches weather data from the OpenWeatherMap API.

## Dependencies

- Angular
- Angular Router
- Angular HTTP Client
- FontAwesome for icons

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.