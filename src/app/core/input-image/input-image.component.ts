import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-input-image',
  templateUrl: './input-image.component.html',
  styleUrls: ['./input-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block',
  },
})
export class InputImageComponent {
  @Input()
  imageSrc: string | undefined;

  @HostBinding('style.filter')
  hue;

  constructor() {
    this.hue = `hue-rotate(${360 * Math.random()}deg)`;
  }
}
