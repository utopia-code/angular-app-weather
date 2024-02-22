import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  urlIMG = 'https://img.freepik.com/vector-gratis/iconos-clima-nublado-lluvioso-soleado_1308-126268.jpg';
  city: string = '';
  temperature: number = 0;
  humidity: number = 0;
  weather: string = '';
  query: boolean = false;
  loading: boolean = false;
  showError: boolean = false;

  constructor(private _weatherService: WeatherService) { }

  getWeather() {
    this.query = false;
    this.loading = true;

    this._weatherService.getWeather(this.city).subscribe(data => {
      this.loading = false;
      this.query = true;
      this.temperature = data.main.temp - 273;
      this.humidity = data.main.humidity;
      this.weather = data.weather[0].main;
    }, error => {
      console.log(error);
      this.loading = false;
      this.error();
    })
  }

  error() {
    this.showError = true;
    setTimeout(() => {
      this.showError = false;
      this.city = '';
    },3000)
  }
  
}
