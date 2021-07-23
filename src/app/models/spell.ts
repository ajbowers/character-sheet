export class Spell {
  name: string = "";
  level: number = 0;
  type: string = "";
  range: number = 0;
  description: string = "";
  castingTime: string = "";
  prepared: boolean = true;
  duration: string = "";
  components: string[] = []


  constructor(name: string, level: number, type: string, range: number, description: string, castingTime: string, prepared: boolean, duration: string,  components: string[]) {
    this.name = name;
    this.level = level;
    this.type = type;
    this.range = range;
    this.description = description;
    this.castingTime = castingTime;
    this.prepared = prepared;
    this.duration = duration;
    this.components = components;
  }
}
