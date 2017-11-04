import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent }  from './app.component';
import { headerComponent } from './header/app.headerComponent';
import { navComponent } from './nav/app.navComponent';
import { homeComponent } from './nav/home/app.homeComponent';
import { socialComponent } from './social/app.socialComponent';
import { footerComponent } from './footer/app.footerComponent';
import { aboutComponent } from './nav/about/app.aboutComponent';
import { contactComponent } from './nav/contact/app.contactComponent';
import { serviceComponent } from './nav/services/app.serviceComponent';
import { catalogComponent } from './projects/app.catalogComponent';
import { attractionsComponent } from './projects/app.attractionsComponent';
import { linuxComponent } from './projects/app.linuxComponent';
import { analysisComponent } from './projects/app.analysisComponent';

@NgModule({
  imports: [ BrowserModule,
    FormsModule,
    RouterModule.forRoot([
  					{
  						path: 'about',
              component: aboutComponent,
              children: [
                {
                  path: 'about/catalog',
                  component: catalogComponent
                },
                {
                  path: 'about/attractions',
                  component: attractionsComponent
                },
                {
                  path: 'about/log-analysis',
                  component: analysisComponent
                },
                {
                  path: 'about/linux',
                  component: linuxComponent
                }
                  ]
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
            socialComponent,
  				  footerComponent,
  				  aboutComponent,
            contactComponent,
            serviceComponent,
            catalogComponent,
            linuxComponent,
            attractionsComponent,
            analysisComponent
  				],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
