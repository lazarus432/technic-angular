import { Injectable } from '@angular/core';


@Injectable()
export class ServicesService{
  getServices(){
    return [
      {"id": 1, "name": "Email Tutorials", "price": "$40.00 per hour"},
      {"id": 2, "name": "Smart Phone Tutorials", "price": "$40.00 per hour"},
      {"id": 3, "name": "Printer/Fax Setup", "price": "$20.00"},
      { "id": 4, "name": "Data Transfer", "price": "$30.00"},
      { "id": 5, "name": "Virus Removal", "price": "$40.00 per hour"}
    ]
  }
}
