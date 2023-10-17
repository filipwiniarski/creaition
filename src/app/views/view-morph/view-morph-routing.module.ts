import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ViewMorphComponent } from './view-morph.component';

const routes: Route[] = [
  {
    path: '',
    component: ViewMorphComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewMorphRoutingModule {}
