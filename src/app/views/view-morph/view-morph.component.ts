import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MorphBlock } from '@creaitive/types/morph-block';

@Component({
  selector: 'app-view-morph',
  templateUrl: './view-morph.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewMorphComponent {
  morphs: readonly MorphBlock[] = [
    ['/assets/img/i1.png', '/assets/img/i2.png'],
  ];

  onMorph(morphOutput: MorphBlock): void {
    this.morphs = [...this.morphs, morphOutput];
  }

  trackBy(index: number): number {
    return index;
  }
}
