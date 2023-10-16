import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MorphGroupComponent } from '../morph-group.component';

@Component({
  selector: 'app-morph-group-button',
  templateUrl: './morph-group-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MorphGroupButtonComponent {
  constructor(
    @Inject(MorphGroupComponent)
    readonly morphGroupComponent: MorphGroupComponent,
  ) {}
}
