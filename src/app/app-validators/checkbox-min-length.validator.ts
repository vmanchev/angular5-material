import { AbstractControl, FormArray, ValidatorFn } from '@angular/forms';

export function CheckboxMinLength(minSize: number): ValidatorFn {
  return (control: AbstractControl): {} => {
    return (control.value.length < minSize) ? { 'checkboxMinLength': true } : null;
  };
}
