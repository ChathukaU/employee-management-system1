import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { AboutUsPageComponent } from './Pages/about-us-page/about-us-page.component';
import { ContactUsPageComponent } from './Pages/contact-us-page/contact-us-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, title: 'Home Page' },
  { path: 'home', component: HomePageComponent, title: 'Home Page' },
  { path: 'about-us', component: AboutUsPageComponent, title: 'About Us' },
  { path: 'contact-us', component: ContactUsPageComponent, title: 'Contact Us' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
