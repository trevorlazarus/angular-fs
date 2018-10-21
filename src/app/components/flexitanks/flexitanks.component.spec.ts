import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexitanksComponent } from './flexitanks.component';

describe('FlexitanksComponent', () => {
  let component: FlexitanksComponent;
  let fixture: ComponentFixture<FlexitanksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexitanksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexitanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
