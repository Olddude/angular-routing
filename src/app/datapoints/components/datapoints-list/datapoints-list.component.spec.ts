import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatapointsListComponent } from './datapoints-list.component';

describe('DatapointsListComponent', () => {
  let component: DatapointsListComponent;
  let fixture: ComponentFixture<DatapointsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatapointsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatapointsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
