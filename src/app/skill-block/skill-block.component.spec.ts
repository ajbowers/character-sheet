import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillBlockComponent } from './skill-block.component';

describe('SkillBlockComponent', () => {
  let component: SkillBlockComponent;
  let fixture: ComponentFixture<SkillBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
