import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCharacterComponent } from './base-character.component';

describe('BaseCharacterComponent', () => {
  let component: BaseCharacterComponent;
  let fixture: ComponentFixture<BaseCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseCharacterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
