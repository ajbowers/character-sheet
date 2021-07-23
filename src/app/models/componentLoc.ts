export class ComponentLoc {
  name: string = "";
  left: number = 0;
  top: number = 0;
  width: number = 0;
  height: number = 0;
  show: boolean = true;
  constructor(name: string, left: number, top: number, width: number, height: number, show: boolean) {
    this.name = name;
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.show = show;
  }
}
