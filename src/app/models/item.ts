export class Item {
  type: string = "";
  damage: string = "";
  range: number = 0;
  effects: string = "";
  value: string = "";
  isMagical: boolean = false;
  armorClass: number = 0;
  notes: string = "";

  constructor(type: string, damage: string, range: number, effects: string, value: string, isMagical: boolean, armorClass: number, notes: string) {
    this.type = type;
    this.damage = damage;
    this.range = range;
    this.effects = effects;
    this.value = value;
    this.isMagical = isMagical;
    this.armorClass = armorClass;
    this.notes = notes;
  }
}
