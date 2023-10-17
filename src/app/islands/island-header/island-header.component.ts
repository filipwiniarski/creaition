import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-island-header',
  templateUrl: './island-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IslandHeaderComponent {}
