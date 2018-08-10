import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatacontainersDetailComponent } from './datacontainers-detail.component';

describe('DatacontainersDetailComponent', () => {
  let component: DatacontainersDetailComponent;
  let fixture: ComponentFixture<DatacontainersDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatacontainersDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatacontainersDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
