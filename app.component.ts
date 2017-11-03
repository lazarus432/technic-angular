import { Component } from '@angular/core';
import { ServicesService } from './nav/services/services.service';

import { headerComponent } from './header/app.headerComponent';
import { navComponent } from './nav/app.navComponent';
import { homeComponent } from './nav/home/app.homeComponent';
import { footerComponent } from './footer/app.footerComponent';
import { aboutComponent } from './nav/about/app.aboutComponent';
import { contactComponent } from './nav/contact/app.contactComponent';
import { serviceComponent } from './nav/services/app.serviceComponent';
import { socialComponent } from './social/app.socialComponent';
import { catalogComponent } from './projects/app.catalogComponent';
import { attractionsComponent } from './projects/app.attractionsComponent';
import { linuxComponent } from './projects/app.linuxComponent';

@Component({
  selector: 'my-app',
  templateUrl: './main.html',
  providers: [ServicesService]
})
export class AppComponent  {


}
