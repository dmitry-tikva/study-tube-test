import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/users/list',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule),
  },
  {
    path: '',
    loadChildren: () => import('./pages/learnings/learnings.module').then(m => m.LearningsModule),
  },
  {
    path: '**',
    redirectTo: '/users/list',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
