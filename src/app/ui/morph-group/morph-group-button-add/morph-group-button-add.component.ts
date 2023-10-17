import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input,
} from '@angular/core';
import { MorphGroupComponent } from '../morph-group.component';
import { aiPure } from '@creaitive/decorators/pure';
import { map, Observable } from 'rxjs';
import { MorphBlock } from '@creaitive/types/morph-block';

@Component({
  selector: 'app-morph-group-button-add',
  templateUrl: './morph-group-button-add.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block h-[180px]',
  },
})
export class MorphGroupButtonAddComponent {
  @Input()
  images: MorphBlock = [];

  get buttonClass(): string {
    const base =
      'duration-300 absolute text-4xl h-[180px] flex justify-center items-center z-10 border border-zinc-300 rounded-md hover:bg-zinc-100 active:bg-white';
    return this.hasImages
      ? `${base} w-[80px] left-full translate-x-4`
      : `${base} w-[200px] -translate-x-[100px]`;
  }

  private get hasImages(): boolean {
    return this.images.length > 0;
  }

  @aiPure
  get isPristine$(): Observable<boolean> {
    return this.morphGroupComponent.status$.pipe(
      map((status) => status === 'pristine'),
    );
  }

  constructor(
    @Inject(MorphGroupComponent)
    readonly morphGroupComponent: MorphGroupComponent,
  ) {}
}
