import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LineComponent} from "./line.component";

const routes: Routes = [
  {
    path: '',
    component: LineComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LineRoutingModule { }
