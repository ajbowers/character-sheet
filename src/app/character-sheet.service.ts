import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterSheetService {

  constructor() { }

  dragEnd(event: CdkDragEnd, selector: string) {
    let positionStorage = window.localStorage;
    let ele = event.source.element.nativeElement;
    let left = ele.getBoundingClientRect().left;
    let top  = ele.getBoundingClientRect().top;
    positionStorage.setItem(selector + "PosLeft", left.toString());
    positionStorage.setItem(selector + "PosTop", top.toString());
  }
}
