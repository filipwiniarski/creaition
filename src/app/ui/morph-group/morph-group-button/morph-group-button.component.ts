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
    const base =
      'h-10 flex items-center justify-center border duration-300 rounded-md mx-auto';

    return this.morphGroupComponent.status$.pipe(
      map((status) => {
        switch (status) {
          case 'pristine':
            return `${base} w-32 hover:bg-gray-100 active:bg-gray-200 border-zinc-300`;
          case 'morphed':
            return `${base} bg-black w-10 text-white border-black rounded-full`;
          case 'pending':
            return `${base} bg-black w-32 text-white border-black`;
        }
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
