import { Item } from "./item";
import { Skill } from "./skill";


export class Class {
  name: string = "";
  subclass: string = "";
  hitDice: string = "";
  savingThrows: string[] = [];
  startingItems: Item[] = [];
  skills: Skill[] = [];

  constructor(name: string, subclass: string, hitDice: string, savingThrows: string[], startingItems: Item[], skills: Skill[]) {
    this.name = name;
    this.subclass = subclass;
    this.hitDice = hitDice;
    this.savingThrows = savingThrows;
    this.startingItems = startingItems;
    this.skills = skills;
  }
}
