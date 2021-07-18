import { Ability } from "./ability";
import { Item } from "./item";


export class Class {
  className: string = "";
  subclassName: string = "";
  hitDie: string = "";
  savingThrows: string[] = [];
  classItems: Item[] = [];
  skills: string[] = [];
  classAbilities: Ability[] = [];

  constructor(className: string, subclassName: string, hitDie: string, savingThrows: string[], classItems: Item[], skills: string[], classAbilities: Ability[]) {
    this.className = className;
    this.subclassName = subclassName;
    this.hitDie = hitDie;
    this.savingThrows = savingThrows;
    this.classItems = classItems;
    this.skills = skills;
    this.classAbilities = classAbilities;
  }
}
