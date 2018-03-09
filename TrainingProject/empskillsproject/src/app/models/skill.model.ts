/**
 * Created by ptd4w10 on 05/10/2017.
 */
export class Skill {
  public id: string;
  public skillId: string;
  public technology: string;
  public framework: string;
  public domain: string;
  public knowledgeArea: string;

  constructor(id: string, skillId: string, technology: string,
              framework: string, domain: string, knowledgeArea: string) {
    this.id = id;
    this.skillId = skillId;
    this.technology = technology;
    this.framework = framework;
    this.domain = domain;
    this.knowledgeArea = knowledgeArea;
  }

}
