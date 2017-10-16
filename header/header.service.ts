import { Injectable } from '@angular/core';


@Injectable()
export class EmployeeService{
	getEmployees(){
		return [
			{"id": 1, "name": "Nic", "gender": "Male"},
			{"id": 2, "name": "Carol", "gender": "Female"},
			{"id": 3, "name": "Jon", "gender": "Male"},
			{"id": 4, "name": "Brenda", "gender": "Female"}
		]
	}
}