import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardTitleComponent } from './components/card-title/card-title.component';
import { CardBodyComponent } from './components/card-body/card-body.component';
import { CardComponent } from './components/card/card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WeatherContainerComponent } from './components/weather-container/weather-container.component';

@NgModule({
  declarations: [
    AppComponent,
    CardTitleComponent,
    CardBodyComponent,
    CardComponent,
    WeatherContainerComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
