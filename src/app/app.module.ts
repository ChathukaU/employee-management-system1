import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { ContactUsPageComponent } from './Pages/contact-us-page/contact-us-page.component';
import { AboutUsPageComponent } from './Pages/about-us-page/about-us-page.component';
import { NavbarComponent } from './Pages/Partials/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactUsPageComponent,
    AboutUsPageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
