import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MorphGroupComponent } from './morph-group.component';
import { InputImageModule } from '../input-image/input-image.module';

@NgModule({
  declarations: [MorphGroupComponent],
  imports: [CommonModule, InputImageModule],
})
export class MorphGroupModule {}
