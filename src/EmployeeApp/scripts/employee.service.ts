import {Injectable} from 'angular2/core';
import {Http, Response, URLSearchParams} from 'angular2/http';
import {Employee} from './employee';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class EmployeeService {
    constructor(private http: Http) { }

    private _employeesUrl = 'http://localhost:6805/api/employee';

    getEmployees() {
        console.log(this._employeesUrl);
        return this.http.get(this._employeesUrl).map(res => <Employee[]>res.json()).catch(this.handleError);
    }

    getEmployee(id: number) {
        let params: URLSearchParams = new URLSearchParams();
        params.set('id', String(id));
        return this.http.get(this._employeesUrl, { search: params }).map(res => res.json()).catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}