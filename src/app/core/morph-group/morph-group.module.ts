import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MorphGroupComponent } from './morph-group.component';
import { InputImageModule } from '../input-image/input-image.module';
import { ConnectorsModule } from '../connectors/connectors.module';

@NgModule({
  declarations: [MorphGroupComponent],
  imports: [CommonModule, InputImageModule, ConnectorsModule],
  exports: [MorphGroupComponent],
})
export class MorphGroupModule {}
