import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordStrengthValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null; 
    }

    const value = control.value;
    const errors: ValidationErrors = {};

    if (!/[a-z]/.test(value)) {
      errors['lowercase'] = true;
    }
    
    if (!/[A-Z]/.test(value)) {
      errors['uppercase'] = true;
    }

    if (!/[0-9]/.test(value)) {
      errors['digit'] = true;
    }

    if (!/[!@#$%^&*_=+\-]/.test(value)) {
      errors['specialChar'] = true;
    }

    if (value.length < 8 || value.length > 12) {
      errors['length'] = true;
    }

    return Object.keys(errors).length ? errors : null;
  };
}

