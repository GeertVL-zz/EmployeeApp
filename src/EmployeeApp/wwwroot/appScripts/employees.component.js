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
var router_1 = require('angular2/router');
var employee_service_1 = require('./employee.service');
var employee_detail_component_1 = require('./employee-detail.component');
var EmployeesComponent = (function () {
    function EmployeesComponent(_router, _employeeService) {
        this._router = _router;
        this._employeeService = _employeeService;
        this.title = 'My Employees';
    }
    EmployeesComponent.prototype.onSelect = function (employee) { this.selectedEmployee = employee; };
    EmployeesComponent.prototype.getEmployees = function () {
        var _this = this;
        this._employeeService.getEmployees().subscribe(function (employees) { return _this.employees = employees; }, function (error) { return _this.errorMessage = error; });
    };
    EmployeesComponent.prototype.ngOnInit = function () {
        this.getEmployees();
    };
    EmployeesComponent.prototype.gotoDetail = function () {
        this._router.navigate(['EmployeeDetail', { id: this.selectedEmployee.id }]);
    };
    EmployeesComponent = __decorate([
        core_1.Component({
            selector: 'my-employees',
            templateUrl: 'employees.component.html',
            styleUrls: ['employees.component.css'],
            directives: [employee_detail_component_1.EmployeeDetailComponent]
        }), 
        __metadata('design:paramtypes', [router_1.Router, employee_service_1.EmployeeService])
    ], EmployeesComponent);
    return EmployeesComponent;
})();
exports.EmployeesComponent = EmployeesComponent;
//# sourceMappingURL=employees.component.js.map