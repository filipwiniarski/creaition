import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputImageComponent } from './input-image.component';
import { IconXCircleComponent } from '@creaitive/icons/icon-x-circle.component';

@NgModule({
  declarations: [InputImageComponent],
  imports: [CommonModule, IconXCircleComponent],
  exports: [InputImageComponent],
})
export class InputImageModule {}
