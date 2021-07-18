import { Character } from './../models/character';
import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, HostListener, ChangeDetectorRef } from '@angular/core';
import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { CharacterSheetService } from '../character-sheet.service';
import characterJSON from '../../assets/data/character-sample.json';
const enum Status {
  OFF = 0,
  RESIZE = 1,
  MOVE = 2
}

@Component({
  selector: 'app-resizable-draggable',
  templateUrl: './resizable-draggable.component.html',
  styleUrls: ['./resizable-draggable.component.scss']
})
export class ResizableDraggableComponent implements OnInit, AfterViewInit {
  @Input('width')
  public width!: number;
  @Input('height')
  public height!: number;
  @Input('left')
  public left!: number;
  @Input('top')
  public top!: number;
  @ViewChild("box")
  public box!: ElementRef;

  private boxPosition!: { left: number; top: number; };
  private containerPos!: { left: number; top: number; right: number; bottom: number; };
  public mouse!: { x: number; y: number; };
  public status: Status = Status.OFF;
  private mouseClick!: { x: number; y: number; left: number; top: number; };

  @Input('selector') public selector!: string;
  @Input('character') public character!: Character;
  @Input('header') public header!: string;

  constructor(private element: ElementRef,
              private characterService: CharacterSheetService,
              private changeDetectorRef: ChangeDetectorRef){}

  ngOnInit() {


  }

  ngAfterViewInit(){
    this.loadBox();
    this.loadContainer();

    let grip = this.element.nativeElement.firstChild.lastChild;
    this.loadComponentLocation(grip);
  }

  loadComponentLocation(gripElement: ElementRef) {

    let componentX = 0;
    let componentY = 0;
    let height = 0;
    let width = 0;
    let components = characterJSON["components"];

    for (let i = 0; i < components.length; i++) {
      let _name = components[i]["component-name"];
      if (_name === this.selector) {
        componentX = components[i]["xPos"];
        componentY = components[i]["yPos"];
        height = components[i]["height"];
        width = components[i]["width"];
      }
    }

    // set new X,Y Coords for this component
    this.element.nativeElement.style.left     = componentX +'px';
    this.element.nativeElement.style.top      = componentY +'px';
    this.element.nativeElement.style.height   = height + 'px';
    this.element.nativeElement.style.width    = width + 'px';


  }

  private loadBox(){
    const {left, top} = this.box.nativeElement.getBoundingClientRect();
    this.boxPosition = {left, top};
  }

  private loadContainer(){
    const left = this.boxPosition.left - this.left;
    const top = this.boxPosition.top - this.top;
    const right = left + 1060;
    const bottom = top + 1920;
    this.containerPos = { left, top, right, bottom };
  }

  setStatus(event: MouseEvent, status: number){
    if(status === 1) event.stopPropagation();
    else if(status === 2) this.mouseClick = { x: event.clientX, y: event.clientY, left: this.left, top: this.top };
    else this.loadBox();
    this.status = status;
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent){
    this.mouse = { x: event.clientX, y: event.clientY };

    if(this.status === Status.RESIZE) this.resize();
    else if(this.status === Status.MOVE) this.move();
  }

  dragEnd(event: CdkDragEnd) {
    console.log(this.selector);
    this.characterService.dragEnd(event, this.selector);
  }

  private resize(){
    if(this.resizeCondMeet()){
      this.width = Number(this.mouse.x > this.boxPosition.left) ? this.mouse.x - this.boxPosition.left : 0;
      this.height = Number(this.mouse.y > this.boxPosition.top) ? this.mouse.y - this.boxPosition.top : 0;
    }
  }

  private resizeCondMeet(){
    return (this.mouse.x < this.containerPos.right && this.mouse.y < this.containerPos.bottom);
  }

  private move(){
    if(this.moveCondMeet()){
      this.left = this.mouseClick.left + (this.mouse.x - this.mouseClick.x);
      this.top = this.mouseClick.top + (this.mouse.y - this.mouseClick.y);
    }
  }

  private moveCondMeet(){
    const offsetLeft = this.mouseClick.x - this.boxPosition.left;
    const offsetRight = this.width - offsetLeft;
    const offsetTop = this.mouseClick.y - this.boxPosition.top;
    const offsetBottom = this.height - offsetTop;
    return (
      this.mouse.x > this.containerPos.left + offsetLeft &&
      this.mouse.x < this.containerPos.right - offsetRight &&
      this.mouse.y > this.containerPos.top + offsetTop &&
      this.mouse.y < this.containerPos.bottom - offsetBottom
      );
  }
}

