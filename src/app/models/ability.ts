export class Ability {
  name: string = "";
  levelReq: number = 0;
  description: string = "";

  constructor(name: string, levelReq: number, description: string) {
    this.name = name;
    this.levelReq = levelReq;
    this.description = description;
  }
}
