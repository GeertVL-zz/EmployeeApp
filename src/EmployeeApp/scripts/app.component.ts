import {Component} from 'angular2/core';
import {EmployeeService} from './employee.service';
import {EmployeesComponent} from './employees.component';
import {DashboardComponent} from './dashboard.component';
import {EmployeeDetailComponent} from './employee-detail.component';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS}    from 'angular2/http';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a [routerLink]="['Dashboard']">Dashboard</a>
            <a [routerLink]="['Employees']">Employees</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styleUrls: ['app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS, EmployeeService]
})

@RouteConfig([
    {
        path: '/employees',
        name: 'Employees',
        component: EmployeesComponent
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/detail/:id',
        name: 'EmployeeDetail',
        component: EmployeeDetailComponent
    }
])

export class AppComponent {
    title = 'Tour of Employees';
};