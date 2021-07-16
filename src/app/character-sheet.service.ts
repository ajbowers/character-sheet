import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterSheetService {

  constructor() { }

  dragEnd(event: CdkDragEnd) {
    let positionStorage = window.localStorage;
    let ele = event.source.element.nativeElement;
    let left = ele.getBoundingClientRect().left;
    let top  = ele.getBoundingClientRect().top;
    positionStorage.setItem(ele.id + "PosLeft", left.toString());
    positionStorage.setItem(ele.id + "PosTop", top.toString());
  }
}
