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
@NgModule({
  declarations: [AppComponent, HeaderComponent, MainComponent, CardComponent],
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
