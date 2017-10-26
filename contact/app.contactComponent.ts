import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact.model';

@Component({
  //selector: 'contact-form',
  templateUrl: './contact.html',
})
export class contactComponent implements OnInit {

	model = new Contact("", "", "");

	constructor() { }

	ngOnInit() {

	}

	get currentContact() {
		return JSON.stringify(this.model);
	}

}