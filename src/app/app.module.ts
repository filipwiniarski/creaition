import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IslandHeaderModule } from '@creaitive/islands/island-header/island-header.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, RouterOutlet, IslandHeaderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
