import { Routes } from '@angular/router';

import { UsersListComponent } from './users-list/users-list.component';

export const UsersRoutes: Routes = [
  {
    path: 'users',
    children: [
      {
        path: '',
        redirectTo: 'list',
      },
      {
        path: 'list',
        component: UsersListComponent,
      },
      {
        path: '**',
        redirectTo: 'list',
      },
    ],
  },
];
