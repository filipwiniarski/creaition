import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgOptimizedImage } from '@angular/common';
import { InputImageModule } from './ui/input-image/input-image.module';
import { MorphGroupModule } from './ui/morph-group/morph-group.module';
import { IslandHeaderModule } from './islands/island-header/island-header.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgOptimizedImage,
    InputImageModule,
    MorphGroupModule,
    IslandHeaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
