import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  API = 'https://api.openweathermap.org/data/2.5/weather?appid=';
  key = '2d7bac7ddc73312950fbac60c22ca52b';

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<any> {
    const URL = this.API + this.key + '&q=' + city;
    return this.http.get(URL);
  }
}
