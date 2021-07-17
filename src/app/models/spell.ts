export class Spell {
  name: string = "";
  school: string = "";
  description: string = "";
  components: string[] = []
  link: string = "";

  constructor(name: string, school: string, description: string, components: string[], link: string) {
    this.name = name;
    this.school = school;
    this.description = description;
    this.components = components;
    this.link = link;
  }
}
