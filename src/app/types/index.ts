export interface ICity {
  id: number;
  name: string;
  country: string;
  coord: {
    lon: number;
    lat: number;
  }
}

export interface IWeather {
  weather: [{
    id: number;
    main: string;
    description: string;
    icon: string
  }];
  main: {
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number
  }
  name: string;
}
