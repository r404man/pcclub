import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/parts/header/header.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './components/pages/main/main.component';
import { CardComponent } from './components/parts/card/card.component';
import { SliderComponent } from './components/parts/slider/slider.component';
import { DetailsComponent } from './components/pages/details/details.component';
import { CartComponent } from './components/pages/cart/cart.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent, MainComponent, CardComponent, SliderComponent, DetailsComponent, CartComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AngularSvgIconModule.forRoot(),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
