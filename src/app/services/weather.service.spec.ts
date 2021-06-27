import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { WeatherService } from './weather.service';

describe('WeatherService', async () => {
  let service: WeatherService;

  beforeEach( async () => {
    TestBed.configureTestingModule({
      providers: [ WeatherService ],
      imports: [ HttpClientTestingModule ],
    });
    service = TestBed.inject(WeatherService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
