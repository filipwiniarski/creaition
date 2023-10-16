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

@Component({
  selector: 'app-morph-group',
  templateUrl: './morph-group.component.html',
  styleUrls: ['./morph-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MorphGroupComponent {
  @Input()
  index: number | undefined;

  @Output()
  morph = new EventEmitter<any>();

  morphed = false;

  @Input()
  images: string[] = [];

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  startMorph(): void {
    this.morphed = true;

    timer(4000).subscribe(() => {
      this.morph.emit(MOCK);
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
