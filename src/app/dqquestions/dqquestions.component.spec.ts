import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DqquestionsComponent } from './dqquestions.component';

describe('DqquestionsComponent', () => {
  let component: DqquestionsComponent;
  let fixture: ComponentFixture<DqquestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DqquestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DqquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
