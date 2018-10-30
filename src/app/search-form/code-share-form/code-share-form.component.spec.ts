import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeShareFormComponent } from './code-share-form.component';

describe('CodeShareFormComponent', () => {
  let component: CodeShareFormComponent;
  let fixture: ComponentFixture<CodeShareFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeShareFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeShareFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
