import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsertComponent } from './insert/insert.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path: "dashboard", component: DashboardComponent
  },
  {
    path: "insert", component: InsertComponent
  },
  {
    path: "update/:id", component: UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
