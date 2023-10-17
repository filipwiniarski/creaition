import { BehaviorSubject } from 'rxjs';
import { MorphStatus } from '../../core/types/morph-status';
import { Injectable } from '@angular/core';

@Injectable()
export class MorphGroupStatus extends BehaviorSubject<MorphStatus> {
  constructor() {
    super('pristine');
  }
}
