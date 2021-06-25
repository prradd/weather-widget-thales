import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable} from 'rxjs';
import {IWeather} from "../types";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiUrl =
    'https://api.openweathermap.org/data/2.5/weather?appid=1890fcd579ac51bb12f42af3ceed6428&units=metric&';

  constructor(private http: HttpClient) { }

  fetchWeather(cityId: number): Observable<IWeather> {
    return this.http.get<IWeather>(`${this.apiUrl}id=${cityId}`)
  }
}
