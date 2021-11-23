import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinlegenrebooksComponent } from './sinlegenrebooks.component';

describe('SinlegenrebooksComponent', () => {
  let component: SinlegenrebooksComponent;
  let fixture: ComponentFixture<SinlegenrebooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinlegenrebooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinlegenrebooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
