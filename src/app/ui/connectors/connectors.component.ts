import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { emptyArrayOfLength } from '../../core/helpers/empty-array-of-length';
import { aiPure } from '../../core/decorators/pure';

type ConnectorsDirection = 'up' | 'down';

@Component({
  selector: 'app-connectors',
  templateUrl: './connectors.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block',
  },
})
export class ConnectorsComponent implements OnChanges {
  @Input()
  length = 0;

  @Input()
  direction: ConnectorsDirection = 'down';

  items: number[] = [];

  @HostBinding('class.-scale-y-100')
  @aiPure
  private get rotate(): boolean {
    return this.direction === 'up';
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['length']) {
      this.setItems();
    }
  }

  setItems(): void {
    this.items = emptyArrayOfLength(this.length || 0);
  }
}
