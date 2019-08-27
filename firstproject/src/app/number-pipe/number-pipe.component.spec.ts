import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberPipeComponent } from './number-pipe.component';

describe('NumberPipeComponent', () => {
  let component: NumberPipeComponent;
  let fixture: ComponentFixture<NumberPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
