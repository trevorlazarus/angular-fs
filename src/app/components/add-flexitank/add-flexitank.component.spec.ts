import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFlexitankComponent } from './add-flexitank.component';

describe('AddFlexitankComponent', () => {
  let component: AddFlexitankComponent;
  let fixture: ComponentFixture<AddFlexitankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFlexitankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFlexitankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
