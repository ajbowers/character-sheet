import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterSheetServiceService {

  constructor() { }

  dragEnd(event: CdkDragEnd) {
    let positionStorage = window.localStorage;
    let id = event.source.element.nativeElement.id;
    positionStorage.setItem(id + "DeltaX", event.distance.x.toString());
    positionStorage.setItem(id + "DeltaY", event.distance.y.toString());
  }
}
