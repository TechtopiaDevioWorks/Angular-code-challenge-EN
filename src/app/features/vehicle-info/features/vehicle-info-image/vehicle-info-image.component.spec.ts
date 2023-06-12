import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleInfoImageComponent } from './vehicle-info-image.component';

describe('VehicleInfoImageComponent', () => {
  let component: VehicleInfoImageComponent;
  let fixture: ComponentFixture<VehicleInfoImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleInfoImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleInfoImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
