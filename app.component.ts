import { Component } from '@angular/core';
import { ServicesService } from './services/services.service';

import { headerComponent } from './header/app.headerComponent';
import { navComponent } from './nav/app.navComponent';
import { mainContentComponent } from './mainContent/app.mainContentComponent';
import { footerComponent } from './footer/app.footerComponent';
import { aboutComponent } from './about/app.aboutComponent';
import { contactComponent } from './contact/app.contactComponent';
import { serviceComponent } from './services/app.serviceComponent';

@Component({
  selector: 'my-app',
  templateUrl: './main.html',
  providers: [ServicesService]
})
export class AppComponent  {


}
