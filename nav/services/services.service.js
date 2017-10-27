"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ServicesService = (function () {
    function ServicesService() {
    }
    ServicesService.prototype.getServices = function () {
        return [
            { "id": 1, "name": "Email Tutorials", "price": "$40.00" },
            { "id": 2, "name": "Smart Phone Tutorials", "price": "$40.00" },
            { "id": 3, "name": "Printer/Fax Setup", "price": "$20.00" },
            { "id": 4, "name": "Data Transfer", "price": "$30.00" },
            { "id": 5, "name": "Virus Removal", "price": "$40.00" }
        ];
    };
    return ServicesService;
}());
ServicesService = __decorate([
    core_1.Injectable()
], ServicesService);
exports.ServicesService = ServicesService;
//# sourceMappingURL=services.service.js.map