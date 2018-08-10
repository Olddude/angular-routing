import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatapointsDetailComponent } from './datapoints-detail.component';

describe('DatapointsDetailComponent', () => {
  let component: DatapointsDetailComponent;
  let fixture: ComponentFixture<DatapointsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatapointsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatapointsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
