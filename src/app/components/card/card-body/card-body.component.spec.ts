import { ComponentFixture, TestBed } from '@angular/core/testing';
import {FormBuilder, ReactiveFormsModule, FormsModule} from '@angular/forms';

import { CardBodyComponent } from './card-body.component';
import { WeatherService } from '../../../services/weather.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('CardBodyComponent', () => {
  let component: CardBodyComponent;
  let fixture: ComponentFixture<CardBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, FormsModule, HttpClientTestingModule ],
      declarations: [ CardBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
