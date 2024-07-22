import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherService } from '../weather.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-city-detail',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent implements OnInit {
  city!: string;
  weather: any;
  loading = false;
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private weatherService: WeatherService,
    private library: FaIconLibrary
  ) {
    library.addIcons(faArrowLeft);
  }

  ngOnInit() {
    this.city = this.route.snapshot.paramMap.get('city')!;
    this.loading = true;
    this.weatherService.getWeatherByCity(this.city).subscribe(
      data => {
        this.weather = data;
        this.loading = false;
      },
      error => {
        this.errorMessage = `Failed to load weather data for ${this.city}`;
        this.loading = false;
      }
    );
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
