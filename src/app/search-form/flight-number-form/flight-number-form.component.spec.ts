import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightNumberFormComponent } from './flight-number-form.component';

describe('FlightNumberFormComponent', () => {
  let component: FlightNumberFormComponent;
  let fixture: ComponentFixture<FlightNumberFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightNumberFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightNumberFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
