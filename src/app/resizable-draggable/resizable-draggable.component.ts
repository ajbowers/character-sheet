import { Character } from './../models/character';
import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, HostListener, ChangeDetectorRef } from '@angular/core';
import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { CharacterSheetService } from '../character-sheet.service';
import characterJSON from '../../assets/data/character-sample.json';
import { AUTO_STYLE } from '@angular/animations';
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
  @Input('show') public show: boolean = true;

  constructor(private element: ElementRef,
    private characterService: CharacterSheetService) { }

  ngOnInit() {
    this.loadComponentLocation();
  }

  ngAfterViewInit() {
    this.loadBox();
    this.loadContainer();
  }

  getComponentHeight(componentId: string) {
    let height = 0;
    this.character.components.forEach(_component => {
      if (_component.name === componentId) {
        height = _component.height;
      }
    });
    return height;
  }

  toggleShowHide() {
    this.show = !this.show;
    if (this.show != true) {
      this.height = 150;
    } else {
      this.height = this.getComponentHeight(this.selector);
    }
    this.characterService.updateShow(this.show, this.selector, this.character);
  }

  loadComponentLocation() {
    let leftOffset = 0;
    let topOffset = 0;
    let components = this.character.components;

    components.forEach(_component => {

      let _name = _component.name;
      if (_name === this.selector) {
        leftOffset = _component.left;
        topOffset = _component.top;
        this.height = _component.height;
        this.width = _component.width
      }
    });


    // set new X,Y Coords for this component
    this.element.nativeElement.style.position = "absolute";
    this.element.nativeElement.style.left = leftOffset + 'px';
    this.element.nativeElement.style.top = topOffset + 'px';
  }

  private loadBox() {
    const { left, top } = this.box.nativeElement.getBoundingClientRect();
    this.boxPosition = { left, top };
  }

  private loadContainer() {
    const left = this.boxPosition.left - this.left;
    const top = this.boxPosition.top - this.top;
    let right = left + 1060;
    let bottom = top + 1920;
    if (window.innerHeight > window.innerWidth) {
      right = left + 1080;
      bottom = top + 1920;
    } else {
      right = left + 2560;
      bottom = top + 1080;
    }

    this.containerPos = { left, top, right, bottom };
  }

  setStatus(event: MouseEvent, status: number) {
    if (status === 1) event.stopPropagation();
    else if (status === 2) this.mouseClick = { x: event.clientX, y: event.clientY, left: this.left, top: this.top };
    else this.loadBox();
    this.status = status;
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouse = { x: event.clientX, y: event.clientY };

    if (this.status === Status.RESIZE) this.resize();
    else if (this.status === Status.MOVE) this.move();
  }

  dragEnd(event: CdkDragEnd) {

    this.characterService.dragEnd(event, this.selector, this.character);
  }

  updateWidthHeight(event: MouseEvent) {
    this.characterService.updateWidthHeight(event, this.selector, this.character);

  }

  private resize() {
    if (this.resizeCondMeet()) {
      this.width = Number(this.mouse.x > this.boxPosition.left) ? this.mouse.x - this.boxPosition.left : 0;
      this.height = Number(this.mouse.y > this.boxPosition.top) ? this.mouse.y - this.boxPosition.top : 0;
    }
  }

  private resizeCondMeet() {
    return (this.mouse.x < this.containerPos.right && this.mouse.y < this.containerPos.bottom);
  }

  private move() {
    if (this.moveCondMeet()) {
      this.left = this.mouseClick.left + (this.mouse.x - this.mouseClick.x);
      this.top = this.mouseClick.top + (this.mouse.y - this.mouseClick.y);
    }
  }

  private moveCondMeet() {
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

