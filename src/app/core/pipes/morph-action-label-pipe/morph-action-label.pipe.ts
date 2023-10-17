import { Pipe, PipeTransform } from '@angular/core';
import { MorphStatus } from '../../types/morph-status';

@Pipe({
  name: 'morphActionLabel',
})
export class MorphActionLabelPipe implements PipeTransform {
  transform(value: MorphStatus | null): string {
    switch (value) {
      case 'pristine':
        return 'morph';
      case 'pending':
        return 'cooking';
      default:
      case 'morphed':
        return '';
    }
  }
}
