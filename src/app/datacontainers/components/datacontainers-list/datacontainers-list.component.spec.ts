import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatacontainersListComponent } from './datacontainers-list.component';

describe('DatacontainersListComponent', () => {
  let component: DatacontainersListComponent;
  let fixture: ComponentFixture<DatacontainersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatacontainersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatacontainersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
