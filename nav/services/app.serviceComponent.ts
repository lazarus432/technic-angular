import { Component, OnInit } from '@angular/core';
import { ServicesService } from './services.service';

@Component({
  //selector: 'service',
  templateUrl: './services.html',
})

export class serviceComponent implements OnInit {
  private services = [];

  constructor(private service: ServicesService) { }
  ngOnInit() {
    this.services = this.service.getServices();
  }
}
