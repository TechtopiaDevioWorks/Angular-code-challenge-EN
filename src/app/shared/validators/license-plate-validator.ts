import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { KentekenCheck } from 'rdw-kenteken-check';

export const LicensePlateValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const value = control.value;
  if (!value || typeof value !== 'string') {
    return null;
  }
  const licenseCheck = new KentekenCheck(
    value,
    undefined,
    undefined,
    undefined,
    'ERROR'
  );
  if (licenseCheck.formatLicense() === 'ERROR') {
    return { licensePlateError: true };
  } else {
    return null;
  }
};
