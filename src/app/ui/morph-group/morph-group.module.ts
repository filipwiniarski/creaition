import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MorphGroupComponent } from './morph-group.component';
import { InputImageModule } from '../input-image/input-image.module';
import { ConnectorsModule } from '../connectors/connectors.module';
import { MorphActionLabelPipeModule } from '@creaitive/pipes/morph-action-label-pipe/morph-action-label-pipe.module';
import { MorphGroupButtonComponent } from './morph-group-button/morph-group-button.component';
import { MorphGroupButtonAddComponent } from './morph-group-button-add/morph-group-button-add.component';
import { IconCheckComponent } from '@creaitive/icons/icon-check.component';

@NgModule({
  declarations: [
    MorphGroupComponent,
    MorphGroupButtonComponent,
    MorphGroupButtonAddComponent,
  ],
  imports: [
    CommonModule,
    InputImageModule,
    ConnectorsModule,
    MorphActionLabelPipeModule,
    IconCheckComponent,
  ],
  exports: [MorphGroupComponent],
})
export class MorphGroupModule {}
