import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { timer } from 'rxjs';
import { MorphStatus } from '../../core/types/morph-status';
import { MorphBlock } from '../../core/types/morph-block';

const MOCK = ['/assets/img/o1.png', '/assets/img/o2.png', '/assets/img/o3.png'];

@Component({
  selector: 'app-morph-group',
  templateUrl: './morph-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block',
  },
})
export class MorphGroupComponent {
  @Input()
  index: number | undefined;

  @Output()
  morph = new EventEmitter<any>();

  status: MorphStatus = 'pristine';

  @Input()
  images: MorphBlock = [];

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  startMorph(): void {
    this.status = 'pending';

    /** Normally, we would dispatch an action (e.g. NGXS) */
    timer(4000).subscribe(() => {
      this.morph.emit([...MOCK]);
      this.status = 'morphed';
      this.changeDetectorRef.detectChanges();
    });
  }

  loadImage(event: Event): void {
    const target = <HTMLInputElement>event.target;
    if (target?.files && target?.files[0]) {
      const file = target.files[0];

      const reader = new FileReader();
      reader.onload = (e) => {
        this.images = [...this.images, reader.result as string];
        this.changeDetectorRef.detectChanges();
      };

      reader.readAsDataURL(file);
    }
  }
}
