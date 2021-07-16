import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropRepositionDirective } from './drag-drop-reposition.component';

describe('DragDropRepositionComponent', () => {
  let component: DragDropRepositionDirective;
  let fixture: ComponentFixture<DragDropRepositionDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragDropRepositionDirective ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragDropRepositionDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
