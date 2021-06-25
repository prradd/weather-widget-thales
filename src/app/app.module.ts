import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { CardTitleComponent } from './components/card/card-title/card-title.component';
import { CardBodyComponent } from './components/card/card-body/card-body.component';
import { CardComponent } from './components/card/card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WeatherContainerComponent } from './components/weather-container/weather-container.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    CardTitleComponent,
    CardBodyComponent,
    CardComponent,
    WeatherContainerComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
