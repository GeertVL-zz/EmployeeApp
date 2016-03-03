var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var employee_service_1 = require('./employee.service');
var employees_component_1 = require('./employees.component');
var dashboard_component_1 = require('./dashboard.component');
var employee_detail_component_1 = require('./employee-detail.component');
var router_1 = require('angular2/router');
var http_1 = require('angular2/http');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Employees';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <h1>{{title}}</h1>\n        <nav>\n            <a [routerLink]=\"['Dashboard']\">Dashboard</a>\n            <a [routerLink]=\"['Employees']\">Employees</a>\n        </nav>\n        <router-outlet></router-outlet>\n    ",
            styleUrls: ['app.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, employee_service_1.EmployeeService]
        }),
        router_1.RouteConfig([
            {
                path: '/employees',
                name: 'Employees',
                component: employees_component_1.EmployeesComponent
            },
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: dashboard_component_1.DashboardComponent,
                useAsDefault: true
            },
            {
                path: '/detail/:id',
                name: 'EmployeeDetail',
                component: employee_detail_component_1.EmployeeDetailComponent
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
;
//# sourceMappingURL=app.component.js.map