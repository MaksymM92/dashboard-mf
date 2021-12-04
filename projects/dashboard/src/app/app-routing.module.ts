import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'chart1',
    loadChildren: () =>
      import('chart1/BarModule').then((m) => {
        return m.BarModule;
      })
  },
  {
    path: 'chart2',
    loadChildren: () =>
      import('chart2/LineModule').then((m) => {
        return m.LineModule;
      })
  },
  {
    path: 'management',
    loadChildren: () =>
      import('management/TableModule').then((m) => {
        return m.TableModule;
      })
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
