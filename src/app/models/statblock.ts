export class StatBlock {
  strength: number = 0;
  dexterity: number = 0;
  constitution: number = 0;
  intelligence: number = 0;
  wisdom: number = 0;
  charisma: number = 0;

  constructor(str: number, dex: number, con: number, int: number, wis: number, cha: number) {
    this.strength     = str;
    this.dexterity    = dex;
    this.constitution = con;
    this.intelligence = int;
    this.wisdom       = wis;
    this.charisma     = cha;
  }
}
