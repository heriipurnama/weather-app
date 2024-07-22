import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WeatherService } from '../weather.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-city-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
  cities: string[] = [];
  weatherData: any[] = [];
  loading = false;
  errorMessage: string | null = null;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    const savedCities = localStorage.getItem('cities');
    this.cities = savedCities ? JSON.parse(savedCities) : [];
    this.loadWeatherData();
  }

  loadWeatherData() {
    this.weatherData = [];
    this.cities.forEach(city => {
      this.loading = true;
      this.weatherService.getWeatherByCity(city).subscribe(
        data => {
          this.weatherData.push({
            city: city,
            ...data
          });
          this.loading = false;
        },
        error => {
          this.errorMessage = `Failed to load weather data for ${city}`;
          this.loading = false;
        }
      );
    });
  }

  addCity(city: string) {
    if (city && !this.cities.includes(city)) {
      this.cities.push(city);
      localStorage.setItem('cities', JSON.stringify(this.cities));
      this.loadWeatherData();
    }
  }
}
