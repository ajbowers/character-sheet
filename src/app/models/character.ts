import { Ability } from "./ability";
import { Class } from "./class";
import { Item } from "./item";
import { Skill } from "./skill";
import { Spell } from "./spell";
import { StatBlock } from "./statblock";

export class Character {
  name: string = "";
  background: string = "";
  alignment: string = "";
  race: string = "";
  age: number = 0;
  classes: Class[] = [];
  racialAbilities: Ability[] = [];
  coreStats: StatBlock;
  hitPointsCurrent: number = 0;
  hitPointsMax: number = 0;
  proficiencies: Skill[] = [];
  inventory: Item[] = [];
  spells: Spell[] = [];
  savingThrows: string[] = [];

  constructor(name: string, background: string, alignment: string, race: string, age: number, classes: Class[], racialAbilities: Ability[], classAbilities: Ability[], coreStats: StatBlock,
              hitPointsCurrent: number, hitPointsMax: number, proficiencies: Skill[], inventory: Item[], spells: Spell[], savingThrows: string[] ) {
    this.name = name;
    this.background = background
    this.alignment = alignment;
    this.race = race;
    this.age = age;
    this.classes = classes;
    this.racialAbilities = racialAbilities;

    this.coreStats = coreStats;
    this.hitPointsCurrent = hitPointsCurrent;
    this.hitPointsMax = hitPointsMax;
    this.proficiencies = proficiencies;
    this.inventory = inventory;
    this.spells = spells;
    this.savingThrows = savingThrows;
  }
}
