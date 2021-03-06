import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },

  {
    path: 'symbols', loadChildren: () => import('./symbols/symbols.module').then(m=> m.SymbolsModule)
  },
  {
    path: 'dashboard',
		loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  // {
  //   path: '', pathMatch: 'full', redirectTo: 'dashboard' 
  // },
  // {
  //    path: '**', component: NotFoundComponent 
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
