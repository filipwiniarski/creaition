import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-image',
  templateUrl: './input-image.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block',
  },
})
export class InputImageComponent {
  @Input()
  imageSrc: string | undefined;

  alert(): void {
    alert('Could be a modal with inspiration details of some sort');
  }
}
