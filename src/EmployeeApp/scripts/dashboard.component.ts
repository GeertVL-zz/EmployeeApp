import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Employee} from './employee';
import {EmployeeService} from './employee.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    public employees: Employee[];
    errorMessage: string;
    constructor(private _router: Router, private _employeeService: EmployeeService) { }

    ngOnInit() {
        this._employeeService.getEmployees().subscribe(employees => this.employees = employees, error => this.errorMessage = <any>error, () => console.log(this.employees));
    }

    gotoDetail(employee: Employee) {
        let link = ['EmployeeDetail', { id: employee.id }];
        this._router.navigate(link);
    }
}