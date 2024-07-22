import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { CityListComponent } from './app/city-list/city-list.component';
import { CityDetailComponent } from './app/city-detail/city-detail.component';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter([
      { path: '', component: CityListComponent },
      { path: 'city/:city', component: CityDetailComponent }
    ])
  ]
}).catch(err => console.error(err));
