import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorTemplateComponent } from './calculator-template.component';

describe('CalculatorTemplateComponent', () => {
  let component: CalculatorTemplateComponent;
  let fixture: ComponentFixture<CalculatorTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
