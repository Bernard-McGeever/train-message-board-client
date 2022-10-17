import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureStationScrollComponent } from './future-station-scroll.component';

describe('FutureStationScrollComponent', () => {
  let component: FutureStationScrollComponent;
  let fixture: ComponentFixture<FutureStationScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FutureStationScrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureStationScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
