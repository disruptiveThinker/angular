import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Employee} from "../models/employee.model";
import {EmployeeSkill} from "../models/employeeskill.model";

@Component({
  templateUrl: 'employeeskill.component.html'
})

export class EmployeeSkillComponent {
  manageEmployeeSkills: EmployeeSkill[] = [];
  frmEmployeeSkill: EmployeeSkill = new EmployeeSkill("", "", "", 0, 0, 0, 0, "");
  flag: number = -1;

}
