import { Component, OnInit, ChangeDetectionStrategy, Input, ViewChild, ViewChildren } from '@angular/core';
import { Character } from '../models/character';
import { StatBlock } from '../models/statblock';
import { ResizeEvent } from 'angular-resizable-element';
import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { ElementRef } from '@angular/core';


@Component({
  selector: 'app-base-character',
  templateUrl: './base-character.component.html',
  styleUrls: ['./base-character.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseCharacterComponent implements OnInit {

  @Input() character: Character = new Character("", "", "","",0,[],[],[],new StatBlock(0,0,0,0,0,0), 0, 0, [], [], [], []);


  constructor() { }

  ngOnInit(): void {
  }

  dragEnd(event: CdkDragEnd) {
    let positionStorage = window.localStorage;
    let id = event.source.element.nativeElement.id;
    positionStorage.setItem(id + "DeltaX", event.distance.x.toString());
    positionStorage.setItem(id + "DeltaY", event.distance.y.toString());
  }



}
