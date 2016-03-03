import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Employee} from './employee';
import {EmployeeService} from './employee.service';
import {EmployeeDetailComponent} from './employee-detail.component';

@Component({
    selector: 'my-employees',
    templateUrl: 'employees.component.html',
    styleUrls: ['employees.component.css'],
    directives: [EmployeeDetailComponent]
})

export class EmployeesComponent implements OnInit {
    title = 'My Employees';
    selectedEmployee: Employee;
    employees: Employee[];
    errorMessage: string;

    constructor(private _router: Router, private _employeeService: EmployeeService) { }

    onSelect(employee: Employee) { this.selectedEmployee = employee; }

    getEmployees() {
        this._employeeService.getEmployees().subscribe(employees => this.employees = employees , error => this.errorMessage = <any>error);
    }

    ngOnInit() {
        this.getEmployees();
    }

    gotoDetail() {
        this._router.navigate(['EmployeeDetail', { id: this.selectedEmployee.id }]);
    }
}

