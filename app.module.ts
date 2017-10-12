import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { headerComponent } from './header/app.headerComponent';
import { navComponent } from './nav/app.navComponent';
import { mainContentComponent } from './mainContent/app.mainContentComponent';
import { footerComponent } from './footer/app.footerComponent';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, 
  				  headerComponent, 
  				  navComponent, 
  				  mainContentComponent, 
  				  footerComponent
  				],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
