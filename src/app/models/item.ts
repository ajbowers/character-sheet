export class Item {
  name: string = "";
  damage: string = "";
  range: number = 0;
  description: string = "";
  value: string = "";
  isMagical: boolean = false;
  armorClass: number = 0;
  note: string = "";

  constructor(name: string, damage: string, range: number, description: string, value: string, isMagical: boolean, armorClass: number, note: string) {
    this.name = name;
    this.damage = damage;
    this.range = range;
    this.description = description;
    this.value = value;
    this.isMagical = isMagical;
    this.armorClass = armorClass;
    this.note = note;
  }
}
