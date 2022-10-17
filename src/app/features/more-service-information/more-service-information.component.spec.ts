import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreServiceInformationComponent } from './more-service-information.component';

describe('MoreServiceInformationComponent', () => {
  let component: MoreServiceInformationComponent;
  let fixture: ComponentFixture<MoreServiceInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreServiceInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreServiceInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
