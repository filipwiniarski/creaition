import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  morphs: string[][] = [['/assets/img/i1.png', '/assets/img/i2.png']];

  //one = ['/assets/img/o1.png', '/assets/img/o2.png', '/assets/img/o3.png'];

  //two = ['/assets/img/o1.png', '/assets/img/o2.png', '/assets/img/o3.png'];

  onMorph(morphOutput: string[]): void {
    this.morphs.push(morphOutput);
  }
}
