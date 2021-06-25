import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { WeatherService } from '../../../services/weather.service';
import CityList from "../../CityList";
import {ICity, IWeather} from "../../../types";

@Component({
  selector: 'app-card-body',
  templateUrl: './card-body.component.html',
  styleUrls: ['./card-body.component.scss']
})
export class CardBodyComponent implements OnInit {
  @Output() onFetchWeather: EventEmitter<IWeather> = new EventEmitter();

  cities: Array<ICity> = CityList;
  cityWeather: IWeather | null = null;
  chosenCity: FormGroup = {} as FormGroup;

  constructor(private fb: FormBuilder, private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.chosenCity = this.fb.group({
      city: [null]
    })
  }

  onSubmit(): void {
    console.log(this.chosenCity.value.city)
    //TODO round the temp
    this.weatherService.fetchWeather(this.chosenCity.value.city)
      .subscribe((weather) => this.cityWeather = weather);
  }

}
