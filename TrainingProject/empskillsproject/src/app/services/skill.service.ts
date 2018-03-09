/**
 * Created by ptd4w10 on 05/10/2017.
 */
import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Skill} from "../models/skill.model";

@Injectable()
export class SkillService {
  private skillsData: Skill[];

  restUrl: string = "http://localhost:2403/skill";

  constructor(private http: Http) {
    this.skillsData = [];
  }

  getSkills() {
    return this.http.get(this.restUrl);
  }

  getSkillById(id: string) {
    return this.http.get(this.restUrl + "/" + id);
  }

  addSkill(newSkill: Skill) {
    return this.http.post(this.restUrl, newSkill);
  }

  deleteSkill(id: string) {
    return this.http.delete(this.restUrl + "/" + id);
  }

  updateSkill(updateSkill: Skill) {
    return this.http.put(this.restUrl, updateSkill);
  }
}
