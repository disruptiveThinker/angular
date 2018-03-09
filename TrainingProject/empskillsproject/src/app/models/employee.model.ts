/**
 * Created by ptd4w10 on 05/10/2017.
 */
export class Employee {
  public id:string;
  public empId:string;
  public empName:string;
  public managerId:string;
  public deptId:string;

  constructor(id:string, empId:string, empName:string, managerId:string, deptId:string) {
    this.id = id;
    this.empId = empId;
    this.empName = empName;
    this.managerId = managerId;
    this.deptId = deptId;
  }
}
