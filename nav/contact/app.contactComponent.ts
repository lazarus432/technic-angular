import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'contacts',
  templateUrl: './contact.html',
})
export class contactComponent implements OnInit {
  contacts;
  first;
  last;
  email;
	constructor() {}

	ngOnInit() {
      this.contacts = [
        {
          first: 'John',
          last: 'Smith',
          department: 'Human Resources',
          email: 'jsmith@technic.com'
        },
        {
          first: 'Joel',
          last: 'Zimmerman',
          department: 'Customer Service',
          email: 'jzimmerman@technic.com'
        },
        {
          first: 'Steve',
          last: 'Irwin',
          department: 'Information Technology',
          email: 'sirwim@technic.com'
        }
      ];
    }

    addContact() {
      this.contacts.push({
        first: this.first,
        last: this.last,
        email: this.email
      });
  }
}
