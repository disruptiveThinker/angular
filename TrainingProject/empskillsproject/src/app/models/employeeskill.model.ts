/**
 * Created by ptd4w10 on 05/10/2017.
 */
export class EmployeeSkill {
  public id: string;
  public empId: string;
  public skillId: string;
  public skillLevel: number;
  public internalExpInMonths: number;
  public externalExpInMonths: number;
  public currentProgramExpInMonths: number;
  public updatedDate: string;

  constructor(id: string, empId: string, skillId: string, skillLevel: number,
              internalExpInMonths: number, externalExpInMonths: number,
              currentProgramExpInMonths: number, updatedDate:string) {
    this.id = id;
    this.empId = empId;
    this.skillId = skillId;
    this.skillLevel = skillLevel;
    this.internalExpInMonths = internalExpInMonths;
    this.externalExpInMonths = externalExpInMonths;
    this.currentProgramExpInMonths = currentProgramExpInMonths;
    this.updatedDate = updatedDate;
  }
}
