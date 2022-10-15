import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationPickerComponent } from './station-picker.component';

describe('StationPickerComponent', () => {
  let component: StationPickerComponent;
  let fixture: ComponentFixture<StationPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StationPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StationPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
