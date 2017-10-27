import { Component } from '@angular/core';
import { ServicesService } from './nav/services/services.service';

import { headerComponent } from './header/app.headerComponent';
import { navComponent } from './nav/app.navComponent';
import { homeComponent } from './nav/home/app.homeComponent';
import { footerComponent } from './footer/app.footerComponent';
import { aboutComponent } from './nav/about/app.aboutComponent';
import { contactComponent } from './nav/contact/app.contactComponent';
import { serviceComponent } from './nav/services/app.serviceComponent';

@Component({
  selector: 'my-app',
  templateUrl: './main.html',
  providers: [ServicesService]
})
export class AppComponent  {


}
