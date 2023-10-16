import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-connectors',
  templateUrl: './connectors.component.html',
  styleUrls: ['./connectors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block',
  },
})
export class ConnectorsComponent implements OnChanges {
  @Input()
  length = 0;

  @Input()
  direction: 'up' | 'down' = 'down';

  items: number[] = [];

  @HostBinding('class.-scale-y-100')
  private get rotate(): boolean {
    return this.direction === 'up';
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['length']) {
      const length = changes['length'].currentValue || 0;
      this.items = new Array(length).fill(undefined).map((_, i) => i);
    }
  }
}
