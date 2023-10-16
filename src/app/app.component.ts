import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MorphBlock } from './core/types/morph-block';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  morphs: MorphBlock[] = [['/assets/img/i1.png', '/assets/img/i2.png']];

  onMorph(morphOutput: string[]): void {
    this.morphs.push(morphOutput);
  }
}
