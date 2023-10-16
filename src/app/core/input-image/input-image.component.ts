import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-image',
  templateUrl: './input-image.component.html',
  styleUrls: ['./input-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputImageComponent {
  @Input()
  imageSrc: string | undefined;
}
