import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconPrimitiveComponent } from './icon.primitive.component';

@Component({
  selector: 'icon-check',
  standalone: true,
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="{{ size }}"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCheckComponent extends IconPrimitiveComponent {}
