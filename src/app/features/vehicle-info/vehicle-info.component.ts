import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { VehTypeData } from '@shared/interfaces/vehicle-type-data';
import { LicensePlateValidator } from '@shared/validators/license-plate-validator';
import { LicensePlatePipe } from '@shared/pipes/license-plate.pipe';
@Component({
  selector: 'app-vehicle-info',
  templateUrl: './vehicle-info.component.html',
  styleUrls: ['./vehicle-info.component.css'],
})
export class VehicleInfoComponent implements OnInit, OnDestroy {
  vehTypeArr: VehTypeData[] = [
    {
      vehType: 'auto',
      vehSubTypeArr: [
        'Hatchback',
        'Sedan',
        'Station',
        'Cabriolet',
        'Coupé',
        'Multi Purpose Vehicle (MVP)',
        'Terreinauto',
      ],
    },
    {
      vehType: 'motor',
      vehSubTypeArr: [
        'All-road',
        'Naked',
        'Enduro',
        'Race',
        'Toermotor',
        'Chopper',
        'Zijspan',
      ],
    },
    { vehType: 'scooter', vehSubTypeArr: ['N/A'] },
  ];
  vehInfoForm: FormGroup = new FormGroup({
    vehType: new FormControl<string | null>(null, [Validators.required]),
    vehSubType: new FormControl<string | null>(null, [Validators.required]),
    vehPlate: new FormControl<string | null>(null, [
      Validators.required,
      LicensePlateValidator,
    ]),
  });
  selectedVehType: VehTypeData | null = null;
  vehTypeSubscription: Subscription | undefined;
  vehPlateSubscription: Subscription | undefined;
  formSubmitted = false;
  formLoading = false;
  formError: string|null = null;
  constructor(private licensePlatePipe: LicensePlatePipe) {}

  ngOnInit(): void {
    this.initForm();
  }

  ngOnDestroy(): void {
    if (this.vehTypeSubscription) {
      this.vehTypeSubscription.unsubscribe();
      this.vehTypeSubscription = undefined;
    }
    if (this.vehPlateSubscription) {
      this.vehPlateSubscription.unsubscribe();
      this.vehPlateSubscription = undefined;
    }
  }

  initForm() {
    this.vehInfoForm.get('vehSubType')?.disable();
    this.vehTypeSubscription = this.vehInfoForm
      .get('vehType')
      ?.valueChanges.subscribe((val) => {
        if (val) {
          const vehType = this.vehTypeArr.find((elem) => elem.vehType === val);
          if (vehType) {
            this.selectedVehType = vehType;
            this.vehInfoForm.get('vehSubType')?.reset();
            if (this.selectedVehType.vehSubTypeArr.length > 1) {
              this.vehInfoForm.get('vehSubType')?.enable();
            } else {
              this.vehInfoForm.get('vehSubType')?.disable();
              this.vehInfoForm.get('vehSubType')?.setValue('N/A');
            }
          }
        }
      });
    this.vehPlateSubscription = this.vehInfoForm
      .get('vehPlate')
      ?.valueChanges.subscribe((value) => {
        this.vehInfoForm
          .get('vehPlate')
          ?.patchValue(this.licensePlatePipe.transform(value), {
            emitEvent: false,
            onlySelf: true,
          });
      });
  }
  onSubmit() {
    console.log(this.vehInfoForm.value)
    this.formError = null;
    this.formLoading = true;
    setTimeout(() => {
      this.formLoading = false;
      this.formError = "Vul alle waardes correct in."
      this.formSubmitted = true;
      this.vehInfoForm.markAllAsTouched();
    }, 1000);
  }
}
