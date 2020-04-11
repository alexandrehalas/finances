import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'categories', loadChildren: () => import ('./pages/categories/categories.module').then(module => module.CategoriesModule) },
  { path: 'entries', loadChildren: () => import ('./pages/entries/entries.module').then(module => module.EntriesModule) },
  { path: '', loadChildren: () => import ('./pages/reports/reports.module').then(module => module.ReportsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
