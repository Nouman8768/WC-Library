import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddgenresComponent } from './addgenres.component';

describe('AddgenresComponent', () => {
  let component: AddgenresComponent;
  let fixture: ComponentFixture<AddgenresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddgenresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddgenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
