import {Component, OnInit} from 'angular2/core';
import {Employee} from './employee';
import {RouteParams} from 'angular2/router';
import {EmployeeService} from './employee.service';

@Component({
    selector: 'my-employee-detail',
    templateUrl: 'employee-detail.component.html',
    styleUrls: ['employee-detail.component.css'],
    inputs: ['employees']
})

export class EmployeeDetailComponent implements OnInit {
    employee: Employee;
    errorMessage: string;

    constructor(private _employeeService: EmployeeService, private _routeParams: RouteParams) { }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._employeeService.getEmployee(id).subscribe(employee => this.employee = employee, error => this.errorMessage = <any>error);
    }

    goBack() {
        window.history.back();
    }
}