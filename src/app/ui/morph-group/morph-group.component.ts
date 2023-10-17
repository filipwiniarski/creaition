import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { map, Observable, timer } from 'rxjs';
import { MorphBlock } from '@creaitive/types/morph-block';
import { MorphGroupStatus } from './morph-group-status';
import { aiPure } from '@creaitive/decorators/pure';
import { isNonEmptyFileList } from '@creaitive/helpers/is-non-empty-file-list';

const MOCK = ['/assets/img/o1.png', '/assets/img/o2.png', '/assets/img/o3.png'];

@Component({
  selector: 'app-morph-group',
  templateUrl: './morph-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block',
  },
  providers: [MorphGroupStatus],
})
export class MorphGroupComponent {
  @Input()
  index: number | undefined;

  @Input()
  images: MorphBlock = [];

  @Output()
  morph = new EventEmitter<MorphBlock>();

  @aiPure
  get isFirst(): boolean {
    return this.index === 0;
  }

  @aiPure
  get hasMultipleImages(): boolean {
    return this.images.length > 1;
  }

  @aiPure
  get isMorphed$(): Observable<boolean> {
    return this.status$.pipe(map((status) => status === 'morphed'));
  }

  @aiPure
  get isPristine$(): Observable<boolean> {
    return this.status$.pipe(map((status) => status === 'pristine'));
  }

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    readonly status$: MorphGroupStatus,
  ) {}

  startMorph(): void {
    this.markAsPending();

    /**
     * Normally, we would set up a store and dispatch an action (e.g. NGXS)
     */
    timer(4000).subscribe(() => this.emitMorph([...MOCK]));
  }

  loadImage(event: Event): void {
    const input = <HTMLInputElement>event.target;

    if (!isNonEmptyFileList(input)) {
      return;
    }

    Array.from(input.files).forEach((file) => {
      this.readImage(file);
    });
  }

  deleteImage(imageToDelete: string): void {
    this.images = this.images.filter((image) => image !== imageToDelete);
  }

  private emitMorph(morph: MorphBlock): void {
    this.morph.emit(morph);
    this.markAsMorphed();
  }

  private readImage(file: File): void {
    const reader = new FileReader();
    reader.onload = (e) => this.onImageLoad(reader);
    reader.readAsDataURL(file);
  }

  private onImageLoad(reader: FileReader): void {
    this.images = [...this.images, reader.result as string];
    this.changeDetectorRef.detectChanges();
  }

  private markAsPending(): void {
    this.status$.next('pending');
  }

  private markAsMorphed(): void {
    this.status$.next('morphed');
  }
}
