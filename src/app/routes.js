import {RouterModule} from '@angular/router';

import {HomeComponent} from './components/home.component';

const routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

export const routing = RouterModule.forRoot(routes);
