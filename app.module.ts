import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent }  from './app.component';
import { headerComponent } from './header/app.headerComponent';
import { navComponent } from './nav/app.navComponent';
import { homeComponent } from './nav/home/app.homeComponent';
import { footerComponent } from './footer/app.footerComponent';
import { aboutComponent } from './nav/about/app.aboutComponent';
import { contactComponent } from './nav/contact/app.contactComponent';
import { serviceComponent } from './nav/services/app.serviceComponent';

@NgModule({
  imports: [ BrowserModule,
             FormsModule,
  				   RouterModule.forRoot([
  					{
  						path: 'about',
  						component: aboutComponent
  					},
  					{
  						path: 'contact',
  						component: contactComponent
            },
            {
              path: 'services',
              component: serviceComponent
            },
  					{
  						path: '',
  						component: homeComponent
  					}
  					])
  				],
  declarations: [ AppComponent, 
  				  headerComponent, 
  				  navComponent, 
  				  homeComponent, 
  				  footerComponent,
  				  aboutComponent,
            contactComponent,
            serviceComponent
  				],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
