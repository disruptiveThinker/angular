import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {SkillService} from "../services/skill.service";
import {Skill} from "../models/skill.model";

@Component({
  templateUrl: 'skill.component.html'
})

export class SkillComponent {
  manageSkills : Skill[] =  [];
  frmSkill:Skill =  new Skill("", "", "", "", "", "");
  flag: number = -1;


  constructor(private skillService: SkillService) {
    this.skillService.getSkills().subscribe(
      (data) => {
        console.log(data)
        console.log(data.json())
        this.manageSkills = data.json(), (err) =>console.log("Error ", err)
      }
    );
  }

  saveSkill() {
    this.skillService.addSkill(this.frmSkill).subscribe(
      (resp) => {
        if (this.flag == -1)
          this.manageSkills.push(resp.json())
        else
          this.manageSkills[this.flag] = resp.json(),
            console.log("Save Success", resp)
      },
      (err) => console.log("Save Error", err)
    );
    this.frmSkill = new Skill("", "", "", "", "", "");
  }

  deleteSkill(id: string, index: number) {
    this.skillService.deleteSkill(id).subscribe((resp) => {
        this.manageSkills.splice(index, 1),
          console.log("Delete Success")
      },
      (err) => console.log("Delete Error", err)
    );
  }

  editSkill(selectedSkill: Skill, index: number) {
    //console.log(this.frmProduct);
    //this.frmProduct = selectedProduct;
    Object.assign(this.frmSkill, selectedSkill);
    this.flag = index;
    /*this.ps.updateProduct(this.frmProduct).subscribe(
     (resp) => {this.mgProducts[index] = resp.json(), console.log("Update Success")},
     (err) => console.log("Update Error", err)
     );*/
    //this.frmProduct = new Product("", "", 0, "");
  }
}
