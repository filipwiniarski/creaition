import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectorsComponent } from './connectors.component';
import { ConnectorVerticalComponent } from './connector-vertical/connector-vertical.component';

@NgModule({
  declarations: [ConnectorsComponent, ConnectorVerticalComponent],
  imports: [CommonModule],
  exports: [ConnectorsComponent, ConnectorVerticalComponent],
})
export class ConnectorsModule {}
