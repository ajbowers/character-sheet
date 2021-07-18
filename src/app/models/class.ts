import { Ability } from "./ability";
import { Item } from "./item";
import { Skill } from "./skill";


export class Class {
  className: string = "";
  subclassName: string = "";
  hitDie: string = "";
  savingThrows: string[] = [];
  classItems: Item[] = [];
  skills: Skill[] = [];
  classAbilities: Ability[] = [];

  constructor(className: string, subclassName: string, hitDie: string, savingThrows: string[], classItems: Item[], skills: Skill[], classAbilities: Ability[]) {
    this.className = className;
    this.subclassName = subclassName;
    this.hitDie = hitDie;
    this.savingThrows = savingThrows;
    this.classItems = classItems;
    this.skills = skills;
    this.classAbilities = classAbilities;
  }
}
