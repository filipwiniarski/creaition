import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MorphGroupComponent } from '../morph-group.component';
import { map, Observable } from 'rxjs';
import { aiPure } from '@creaitive/decorators/pure';

@Component({
  selector: 'app-morph-group-button',
  templateUrl: './morph-group-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MorphGroupButtonComponent {
  @aiPure
  get buttonClass$(): Observable<string> {
    const base = 'border duration-300 rounded-md';

    return this.morphGroupComponent.status$.pipe(
      map((status) => {
        return status !== 'pristine'
          ? `${base} bg-black h-10 px-6 text-white border-black`
          : `${base} h-10 px-6 hover:bg-gray-100 active:bg-gray-200 border-zinc-300`;
      }),
    );
  }

  @aiPure
  get disabled$(): Observable<boolean> {
    return this.morphGroupComponent.status$.pipe(
      map((status) => status !== 'pristine'),
    );
  }

  @aiPure
  get morphed$(): Observable<boolean> {
    return this.morphGroupComponent.status$.pipe(
      map((status) => status === 'morphed'),
    );
  }

  constructor(
    @Inject(MorphGroupComponent)
    readonly morphGroupComponent: MorphGroupComponent,
  ) {}
}
