import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MorphGroupComponent } from './morph-group.component';
import { InputImageModule } from '../input-image/input-image.module';
import { ConnectorsModule } from '../connectors/connectors.module';
import { IconCheckBadgeComponent } from '../../icons/icon-check-badge.component';
import { MorphActionLabelPipeModule } from '../../core/pipes/morph-action-label-pipe/morph-action-label-pipe.module';
import { MorphGroupButtonComponent } from './morph-group-button/morph-group-button.component';
import { MorphGroupButtonAddComponent } from './morph-group-button-add/morph-group-button-add.component';

@NgModule({
  declarations: [MorphGroupComponent, MorphGroupButtonComponent, MorphGroupButtonAddComponent],
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
