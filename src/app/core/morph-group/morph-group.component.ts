import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { timer } from 'rxjs';

const MOCK = ['/assets/img/o1.png', '/assets/img/o2.png', '/assets/img/o3.png'];

type Status = 'pristine' | 'pending' | 'morphed';

@Component({
  selector: 'app-morph-group',
  templateUrl: './morph-group.component.html',
  styleUrls: ['./morph-group.component.scss'],
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

  status: Status = 'pristine';

  @Input()
  images: string[] = [];

  get actionLabel(): string {
    switch (this.status) {
      case 'pristine':
        return 'morph';
      case 'pending':
        return 'cooking';
      default:
      case 'morphed':
        return 'ok';
    }
  }

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  startMorph(): void {
    this.status = 'pending';

    timer(4000).subscribe(() => {
      this.morph.emit([...MOCK]);
      this.status = 'morphed';
    });
  }

  loadImage(event: Event): void {
    const target = <HTMLInputElement>event.target;
    if (target?.files && target?.files[0]) {
      const file = target.files[0];

      const reader = new FileReader();
      reader.onload = (e) => {
        this.images.push(reader.result as string);
        this.changeDetectorRef.detectChanges();
      };

      reader.readAsDataURL(file);
    }
  }
}
