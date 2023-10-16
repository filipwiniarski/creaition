import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MorphGroupComponent } from './morph-group.component';
import { InputImageModule } from '../input-image/input-image.module';
import { ConnectorsModule } from '../connectors/connectors.module';
import { IconCheckBadgeComponent } from '../../icons/icon-check-badge.component';
import { MorphActionLabelPipeModule } from '../../core/pipes/morph-action-label-pipe/morph-action-label-pipe.module';

@NgModule({
  declarations: [MorphGroupComponent],
  imports: [
    CommonModule,
    InputImageModule,
    ConnectorsModule,
    IconCheckBadgeComponent,
    MorphActionLabelPipeModule,
  ],
  exports: [MorphGroupComponent],
})
export class MorphGroupModule {}
