"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var app_headerComponent_1 = require("./header/app.headerComponent");
var app_navComponent_1 = require("./nav/app.navComponent");
var app_homeComponent_1 = require("./nav/home/app.homeComponent");
var app_socialComponent_1 = require("./social/app.socialComponent");
var app_footerComponent_1 = require("./footer/app.footerComponent");
var app_aboutComponent_1 = require("./nav/about/app.aboutComponent");
var app_contactComponent_1 = require("./nav/contact/app.contactComponent");
var app_serviceComponent_1 = require("./nav/services/app.serviceComponent");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot([
                {
                    path: 'about',
                    component: app_aboutComponent_1.aboutComponent
                },
                {
                    path: 'contact',
                    component: app_contactComponent_1.contactComponent
                },
                {
                    path: 'services',
                    component: app_serviceComponent_1.serviceComponent
                },
                {
                    path: '',
                    component: app_homeComponent_1.homeComponent
                }
            ])
        ],
        declarations: [app_component_1.AppComponent,
            app_headerComponent_1.headerComponent,
            app_navComponent_1.navComponent,
            app_homeComponent_1.homeComponent,
            app_socialComponent_1.socialComponent,
            app_footerComponent_1.footerComponent,
            app_aboutComponent_1.aboutComponent,
            app_contactComponent_1.contactComponent,
            app_serviceComponent_1.serviceComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map