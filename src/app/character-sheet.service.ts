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

  calcProficiency(level: number) {
    if (level < 5) {
      return 2;
    } else if (level < 9) {
      return 3;
    } else if (level < 13) {
      return 4;
    } else if (level < 17) {
      return 5;
    } else {
      return 6;
    }
  }

  calcStatBonus(stat: number) {
    let result;
    result = (stat-10)/2;
    return result;
  }
}
