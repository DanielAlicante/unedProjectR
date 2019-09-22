import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Send2Component } from './send2.component';

describe('Send2Component', () => {
  let component: Send2Component;
  let fixture: ComponentFixture<Send2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Send2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Send2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
