import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { WeatherContainerComponent } from './weather-container.component';
import {IWeather} from "../../types";

const weatherObj: IWeather = {
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

describe('WeatherContainerComponent', () => {
  let component: WeatherContainerComponent;
  let fixture: ComponentFixture<WeatherContainerComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('CityWeather stats are shown in the component', () => {
    component.cityWeather = weatherObj;
    fixture.detectChanges();

    const bannerDe: DebugElement = fixture.debugElement;

    expect(bannerDe.query(By.css('.weather-header h1')).nativeElement.textContent)
      .toEqual('test name');

    expect(bannerDe.query(By.css('.weather-icon img')).nativeElement.src)
      .toContain('01n');

    expect(bannerDe.query(By.css('.weather-temp h1')).nativeElement.textContent)
      .toEqual('35°'); // also test that it's rounded

    expect(bannerDe.query(By.css('.weather-temp p')).nativeElement.textContent)
      .toEqual('test description');

    expect(bannerDe.query(By.css('.weather-footer-wrapper p')).nativeElement.textContent)
      .toEqual('Humidity: 78');
  })

  it ('When no cityWeather (null) weather-template is not shown', () => {
    component.cityWeather = null;
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('.weather-template'))).toBeNull();
  })

});
