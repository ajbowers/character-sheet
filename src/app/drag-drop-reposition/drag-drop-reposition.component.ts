import { ElementRef } from '@angular/core';
import { Directive, OnInit, ChangeDetectionStrategy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[dragAndDropReposition]'
})
export class DragDropRepositionDirective {

  constructor(private el: ElementRef,
    private renderer: Renderer2) {

    let id = el.nativeElement.id;
    let positionStorage = window.localStorage;

    let newLeft = positionStorage.getItem(id + "PosLeft");
    let newTop  = positionStorage.getItem(id + "PosTop");

    console.log(id + ": X,Y to Translate To: ");
    console.log(newLeft + " , " + newTop);
    let translate = "translate(" + newLeft + "px, " + newTop + "px)";
    renderer.setStyle(el.nativeElement, 'position', 'absolute');
    renderer.setStyle(el.nativeElement, 'transform', translate);

  }


  getOffset(el: any) {
    const rect = el.nativeElement.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
  }


}
