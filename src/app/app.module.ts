import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CapitalizePipe } from './shared/pipes/capitalize.pipe';
import { VehicleInfoComponent } from './features/vehicle-info/vehicle-info.component';
import { VehicleInfoImageComponent } from './features/vehicle-info/features/vehicle-info-image/vehicle-info-image.component';
import { LicensePlatePipe } from './shared/pipes/license-plate.pipe';
import { FormFieldErrorComponent } from './shared/form-field-error/form-field-error.component';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    VehicleInfoComponent,
    VehicleInfoImageComponent,
    LicensePlatePipe,
    FormFieldErrorComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}, {}),
    ReactiveFormsModule
  ],
  providers: [LicensePlatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
