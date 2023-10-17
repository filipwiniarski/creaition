import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

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

  @Input()
  disabled: boolean | null | undefined;

  @Output()
  delete = new EventEmitter<void>();

  emitDelete(): void {
    this.delete.emit();
  }
}
