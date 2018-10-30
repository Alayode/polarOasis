import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityPairFormComponent } from './city-pair-form.component';

describe('CityPairFormComponent', () => {
  let component: CityPairFormComponent;
  let fixture: ComponentFixture<CityPairFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityPairFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityPairFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
