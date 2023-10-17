import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ViewMorphComponent } from './view-morph.component';
import { ViewMorphRoutingModule } from './view-morph-routing.module';
import { InputImageModule } from '@creaitive/ui/input-image/input-image.module';
import { MorphGroupModule } from '@creaitive/ui/morph-group/morph-group.module';

@NgModule({
  declarations: [ViewMorphComponent],
  imports: [
    CommonModule,
    ViewMorphRoutingModule,
    NgOptimizedImage,
    InputImageModule,
    MorphGroupModule,
  ],
  exports: [ViewMorphComponent],
})
export class ViewMorphModule {}
