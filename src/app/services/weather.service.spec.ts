import {TestBed, inject} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import {WeatherService} from './weather.service';
import {IWeather} from '../types';

describe('WeatherService', async () => {
  let weatherService: WeatherService;
  let httpTestingController: HttpTestingController;
  let weather: IWeather;
  let baseUrl = "https://api.openweathermap.org/data/2.5/weather?appid=1890fcd579ac51bb12f42af3ceed6428&units=metric&id=123.";

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [WeatherService],
      imports: [HttpClientTestingModule],
    });

    weather = {
      weather: [{
        id: 123,
        main: "test",
        description: "test description",
        icon: "01n"
      }],
      main: {
        temp: 35.38,
        feels_like: 35.38,
        pressure: 1006,
        humidity: 78
      },
      name: "test name",
    };
    httpTestingController = TestBed.get(HttpTestingController);
    weatherService = TestBed.inject(WeatherService);

  });

  beforeEach(inject(
    [WeatherService],
    (service: WeatherService) => {
      weatherService = service;
    }
  ));

  it('should be created', () => {
    expect(weatherService).toBeTruthy();
  });

  it("should return data", () => {
    let result = {};
    weatherService.fetchWeather(123).subscribe(t => {
      result = t;
    });
    const req = httpTestingController.expectOne({
      method: "GET",
      // url: baseUrl
    });

    console.log(req.request.url);

    req.flush(weather);

    expect(result).toEqual(weather);
  });

});

