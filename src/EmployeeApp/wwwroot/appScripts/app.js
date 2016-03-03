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
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Employees of the company";
        this.employees = EMPLOYEES;
    }
    AppComponent.prototype.onSelect = function (employee) { this.selectedEmployee = employee; };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'employee-app',
            template: "\n        <h1>{{title}}</h1>\n        <ul class=\"employees\">\n            <li *ngFor=\"#emp of employees\" [class.selected]=\"emp === selectedEmployee\" (click)=\"onSelect(emp)\">\n                <span class=\"badge\">{{emp.id}}</span> {{emp.name}}\n            </li>\n        </ul>\n        <div *ngIf=\"selectedEmployee\">\n            <h2>{{selectedEmployee.name}} details!</h2>\n            <div><label>id: </label>{{selectedEmployee.id}}</div>\n            <div>\n                <label>name: </label>\n                <div><input [(ngModel)]=\"selectedEmployee.name\" placeholder=\"name\"></div>\n            </div>\n        </div>\n        ",
            styles: ["\n      .selected {\n        background-color: #CFD8DC !important;\n        color: white;\n      }\n      .employees {\n        margin: 0 0 2em 0;\n        list-style-type: none;\n        padding: 0;\n        width: 10em;\n      }\n      .employees li {\n        cursor: pointer;\n        position: relative;\n        left: 0;\n        background-color: #EEE;\n        margin: .5em;\n        padding: .3em 0;\n        height: 1.6em;\n        border-radius: 4px;\n      }\n      .employees li.selected:hover {\n        background-color: #BBD8DC !important;\n        color: white;\n      }\n      .employees li:hover {\n        color: #607D8B;\n        background-color: #DDD;\n        left: .1em;\n      }\n      .employees .text {\n        position: relative;\n        top: -3px;\n      }\n      .employees .badge {\n        display: inline-block;\n        font-size: small;\n        color: white;\n        padding: 0.8em 0.7em 0 0.7em;\n        background-color: #607D8B;\n        line-height: 1em;\n        position: relative;\n        left: -1px;\n        top: -4px;\n        height: 1.8em;\n        margin-right: .8em;\n        border-radius: 4px 0 0 4px;\n      }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
var EMPLOYEES = [
    { "id": 11, "name": "Jean Jeansen" },
    { id: 12, name: "Janneke Kanneke" },
    { id: 13, name: "Will Willemsen" },
    { id: 14, name: "Peter Peters" },
    { id: 15, name: "Bob Bobsen" }
];
//# sourceMappingURL=app.js.map