import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TailNumberFormComponent } from './tail-number-form.component';

describe('TailNumberFormComponent', () => {
  let component: TailNumberFormComponent;
  let fixture: ComponentFixture<TailNumberFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TailNumberFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TailNumberFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
