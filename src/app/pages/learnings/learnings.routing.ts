import { Routes } from '@angular/router';

import { LearningsListComponent } from './learnings-list/learnings-list.component';

export const LearningsRoutes: Routes = [
  {
    path: 'learnings',
    children: [
      {
        path: '',
        redirectTo: 'list',
      },
      {
        path: 'list',
        component: LearningsListComponent,
      },
      {
        path: '**',
        redirectTo: 'list',
      },
    ],
  },
];
