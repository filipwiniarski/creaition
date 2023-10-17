import { NgModule } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { IslandHeaderComponent } from './island-header.component';

@NgModule({
  declarations: [IslandHeaderComponent],
  exports: [IslandHeaderComponent],
  imports: [NgOptimizedImage],
})
export class IslandHeaderModule {}
