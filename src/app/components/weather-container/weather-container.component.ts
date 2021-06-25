import {Component, Input, OnInit} from '@angular/core';
import {IWeather} from "../../types";

@Component({
  selector: 'app-weather-container',
  templateUrl: './weather-container.component.html',
  styleUrls: ['./weather-container.component.scss']
})
export class WeatherContainerComponent implements OnInit {
  @Input() cityWeather: IWeather | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
