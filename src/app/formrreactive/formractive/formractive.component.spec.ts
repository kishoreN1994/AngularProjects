import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormractiveComponent } from './formractive.component';

describe('FormractiveComponent', () => {
  let component: FormractiveComponent;
  let fixture: ComponentFixture<FormractiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormractiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormractiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
