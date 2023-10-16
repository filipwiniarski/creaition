import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MorphGroupComponent } from './morph-group.component';
import { InputImageModule } from '../input-image/input-image.module';
import { ConnectorsModule } from '../connectors/connectors.module';
import { IconCheckBadgeComponent } from '../../icons/icon-check-badge.component';

@NgModule({
  declarations: [MorphGroupComponent],
  imports: [
    CommonModule,
    InputImageModule,
    ConnectorsModule,
    IconCheckBadgeComponent,
  ],
  exports: [MorphGroupComponent],
})
export class MorphGroupModule {}
