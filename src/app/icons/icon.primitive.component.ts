import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'icon-primitive',
  template: '',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconPrimitiveComponent {
  @Input()
  size = 'w-5';
}
