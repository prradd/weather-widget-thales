import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from 'rxjs';
import {IWeather} from "../types";

const appId = '1890fcd579ac51bb12f42af3ceed6428';
const units = 'metric';
const apiUrl= `https://api.openweathermap.org/data/2.5/weather?appid=${appId}&units=${units}&`;

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
