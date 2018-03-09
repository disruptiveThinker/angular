/**
 * Created by ptd4w10 on 05/10/2017.
 */
import {Injectable} from "@angular/core";
import {Employee} from "../models/employee.model";
import {Http, Headers} from "@angular/http";

@Injectable()
export class EmployeeService {
  private employeesData: Employee[];

  restUrl:string = "http://localhost:2403/employee";

  constructor(private http:Http) {
    this.employeesData = [];
  }

  getEmployees() {
    return this.http.get(this.restUrl);
  }

  getEmployeeById(id:string) {
    return this.http.get(this.restUrl+"/"+id);
  }

  addEmployee(newEmployee:Employee) {
    return this.http.post(this.restUrl, newEmployee);
  }

  deleteEmployee(id:string) {
    return this.http.delete(this.restUrl+"/" +id);
  }

  updateEmployee(updateEmployee:Employee) {
    return this.http.put(this.restUrl, updateEmployee);
  }

}

