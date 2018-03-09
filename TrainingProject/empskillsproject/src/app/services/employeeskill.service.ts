/**
 * Created by ptd4w10 on 05/10/2017.
 */
import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {EmployeeSkill} from "../models/employeeskill.model";

export class EmployeeSkillService {
  private empSkillsData: EmployeeSkill[];

  restUrl: string = "http://localhost:2403/empskill";

  constructor(private http: Http) {
    this.empSkillsData = [];
  }

  getSkills(empId: string) {
    return this.http.get(this.restUrl);
  }

  addSkills(newSkill: EmployeeSkill, empId:string) {
    return this.http.post(this.restUrl, newSkill);
  }

  deleteSkills(id: string) {
    return this.http.delete(this.restUrl + "/" + id);
  }

  updateSkill(updateSkill: EmployeeSkill) {
    return this.http.put(this.restUrl, updateSkill);
  }
}
