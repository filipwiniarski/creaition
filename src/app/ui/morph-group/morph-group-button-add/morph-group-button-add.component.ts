import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MorphGroupComponent } from '../morph-group.component';
import { aiPure } from '@creaitive/decorators/pure';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-morph-group-button-add',
  templateUrl: './morph-group-button-add.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MorphGroupButtonAddComponent {
  @aiPure
  get buttonClass(): string {
    const base =
      'duration-300 absolute text-4xl h-[180px] flex justify-center items-center z-10 border border-zinc-300 rounded-md hover:bg-zinc-100 active:bg-white';
    return this.hasImages
      ? `${base} w-[80px] left-full translate-x-4`
      : `${base} w-[200px]`;
  }

  @aiPure
  get isPristine$(): Observable<boolean> {
    return this.morphGroupComponent.status$.pipe(
      map((status) => status === 'pristine'),
    );
  }

  @aiPure
  private get hasImages(): boolean {
    return this.morphGroupComponent.images.length > 0;
  }

  constructor(
    @Inject(MorphGroupComponent)
    readonly morphGroupComponent: MorphGroupComponent,
  ) {}
}
