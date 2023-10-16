import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MorphGroupComponent } from '../morph-group.component';

@Component({
  selector: 'app-morph-group-button-add',
  templateUrl: './morph-group-button-add.component.html',
  styleUrls: ['./morph-group-button-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MorphGroupButtonAddComponent {
  constructor(
    @Inject(MorphGroupComponent)
    readonly morphGroupComponent: MorphGroupComponent,
  ) {}
}
