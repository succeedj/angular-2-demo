import {FormControl, AbstractControl} from '@angular/forms';

export function valRange(c: AbstractControl) : {[key: string]: boolean} | null {
  if (c.value != undefined && (isNaN(c.value) || c.value < 1 || c.value > 6)) {
    return { 'range' : true };
  };
  return null;
}
