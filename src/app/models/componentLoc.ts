export class ComponentLoc {
  name: string = "";
  left: number = 0;
  top: number = 0;
  width: number = 0;
  height: number = 0;

  constructor(name: string, left: number, top: number, width: number, height: number) {
    this.name = name;
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
  }
}
