import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassBlockComponent } from './class-block.component';

describe('ClassBlockComponent', () => {
  let component: ClassBlockComponent;
  let fixture: ComponentFixture<ClassBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
