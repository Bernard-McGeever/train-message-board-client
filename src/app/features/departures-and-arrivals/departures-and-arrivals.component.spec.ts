import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeparturesAndArrivalsComponent } from './departures-and-arrivals.component';

describe('DeparturesAndArrivalsComponent', () => {
  let component: DeparturesAndArrivalsComponent;
  let fixture: ComponentFixture<DeparturesAndArrivalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeparturesAndArrivalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeparturesAndArrivalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
