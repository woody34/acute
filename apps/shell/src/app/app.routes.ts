import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'user',
    loadChildren: () => import('user/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'logs',
    loadChildren: () => import('logs/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'credentialing',
    loadChildren: () =>
      import('credentialing/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'contracts',
    loadChildren: () => import('contracts/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'binders',
    loadChildren: () => import('binders/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
