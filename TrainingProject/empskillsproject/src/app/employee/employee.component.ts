import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {EmployeeService} from "../services/employee.service";
import {Employee} from "../models/employee.model";

@Component({
  templateUrl: 'employee.component.html'
})

export class EmployeeComponent {
  manageEmployees : Employee[] =  [];
  frmEmployee:Employee =  new Employee("", "", "", "", "");
  flag: number = -1;

  constructor(private employeeService: EmployeeService) {
    this.employeeService.getEmployees().subscribe(
      (data) => {
        console.log(data)
        console.log(data.json())
        this.manageEmployees = data.json(), (err) =>console.log("Error ", err)
      }
    );
  }

  saveEmployee() {
    this.employeeService.addEmployee(this.frmEmployee).subscribe(
      (resp) => {
        if (this.flag == -1)
          this.manageEmployees.push(resp.json())
        else
          this.manageEmployees[this.flag] = resp.json(),
            console.log("Save Success", resp)
      },
      (err) => console.log("Save Error", err)
    );
    this.frmEmployee = new Employee("", "", "", "", "");

  }

  deleteEmployee(id: string, index: number) {
    this.employeeService.deleteEmployee(id).subscribe((resp) => {
        this.manageEmployees.splice(index, 1),
          console.log("Delete Success")
      },
      (err) => console.log("Delete Error", err)
    );
  }

  editEmployee(selectedEmployee: Employee, index: number) {
    //console.log(this.frmProduct);
    //this.frmProduct = selectedProduct;
    Object.assign(this.frmEmployee, selectedEmployee);
    this.flag = index;
    /*this.ps.updateProduct(this.frmProduct).subscribe(
     (resp) => {this.mgProducts[index] = resp.json(), console.log("Update Success")},
     (err) => console.log("Update Error", err)
     );*/
    //this.frmProduct = new Product("", "", 0, "");
  }

}
