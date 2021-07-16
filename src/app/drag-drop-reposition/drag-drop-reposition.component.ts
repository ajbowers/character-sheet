import { ElementRef } from '@angular/core';
import { Directive, OnInit, ChangeDetectionStrategy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[dragAndDropReposition]'
})
export class DragDropRepositionDirective {

  constructor(private el: ElementRef,
    private renderer: Renderer2) {
    let id = el.nativeElement.id;
    console.log(el.nativeElement.id);

    let positionStorage = window.localStorage;

    let deltaX = positionStorage.getItem(id + "DeltaX");
    let deltaY = positionStorage.getItem(id + "DeltaY");
    console.log(this.getOffset(el).left);
    console.log(this.getOffset(el).top);

    console.log(el);
    console.log(deltaX);
    console.log(deltaY);

    let totalMoveX = Number(this.getOffset(el).left) + Number(deltaX);
    let totalMoveY = Number(this.getOffset(el).top) + Number(deltaY);


    console.log(el);
    console.log("Total Move x: " + totalMoveX);
    console.log("Total Move Y: " + totalMoveY);
    let translate = "translate(" + totalMoveX + "px, " + totalMoveY + "px)";
    console.log(translate);
    //el!.nativeElement.transform = translate;

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
